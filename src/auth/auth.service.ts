import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  AuthDto,
  CreateClientDto,
  CreateUserDto,
  UpdatePasswordDto,
  VerifyEmailDto,
} from './dto';
import * as argon from 'argon2';
import { JwtPayload, Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Prisma, User, role } from '@prisma/client';
import { RoleType } from 'src/enumerations';
import { baseUser, roleSuperAdmin } from './role-data';
import { IFacebookClient, IGoogleClient, MailService } from 'src/base';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  url = '';
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
    private mailService: MailService,
  ) {
    this.url = config.get<string>('APP_URL');
  }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    try {
      const userCount = await this.prisma.user.count();
      const hash = await argon.hash(dto.password);
      const _role = await this.addRole(
        userCount == 0 ? RoleType.SUPER_ADMIN : RoleType.BASE_USER,
      );
      const newUser = await this.prisma.user.create({
        data: { email: dto.email, hash, role_id: _role.id, name: dto.name },
        include: {
          role: true,
        },
      });
      const tokens = await this.getTokens(newUser.id, newUser.email);
      await this.updateRtHash(newUser.id, tokens.refresh_token);

      return tokens;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('Credentials incorrect');
      }
      throw error;
    }
  }

  // create user
  async createUser(dto: CreateUserDto): Promise<User> {
    try {
      const hash = await argon.hash(dto.password);
      const role_id = dto.role_id || '';

      let _role = await this.prisma.role.findUnique({ where: { id: role_id } });
      if (!_role) {
        _role = await this.addRole(RoleType.BASE_USER);
      }

      const newUser = await this.prisma.user.create({
        data: { email: dto.email, hash, role_id: _role.id, name: dto.name },
        include: {
          role: true,
        },
      });
      const tokens = await this.getTokens(newUser.id, newUser.email);
      await this.updateRtHash(newUser.id, tokens.refresh_token);

      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('Credentials incorrect');
      }
      throw error;
    }
  }

  // update password
  async updateUserPassword(id: string, dto: UpdatePasswordDto): Promise<User> {
    const hash = await argon.hash(dto.password);
    return this.prisma.user.update({ where: { id }, data: { hash } });
  }

  // async signupGoogle()

  async signinLocal(dto: AuthDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      include: {
        role: true,
      },
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.hash, dto.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: string): Promise<boolean> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
    return true;
  }

  async refreshTokens(userId: string, rt: string): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        role: true,
      },
    });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.hashedRt, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(userId: string, rt: string | undefined): Promise<void> {
    const hash = await argon.hash(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  // functions
  async updateClientRtHash(
    userId: string,
    rt: string | undefined,
  ): Promise<void> {
    const hash = await argon.hash(rt);
    await this.prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: this.config.get<string>('AT_EXPIRES_IN'),
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: this.config.get<string>('RT_EXPIRES_IN'),
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  // role and permissions functions
  async addRole(roleType: RoleType): Promise<role> {
    try {
      let newRole = await this.prisma.role.findUnique({
        where: { title: roleType },
      });

      if (!newRole) {
        const roleDto =
          roleType === RoleType.SUPER_ADMIN ? roleSuperAdmin : baseUser;
        newRole = await this.prisma.role.create({ data: roleDto });
      }

      return newRole;
    } catch (error) {
      console.log(error);
    }
  }

  // Client Google Authentication
  async googleAuthRedirect(user: IGoogleClient) {
    let client = await this.prisma.client.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!client) {
      client = await this.prisma.client.create({
        data: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        },
      });
    }

    const tokens = await this.getTokens(client.id, client.email);

    await this.updateClientRtHash(client.id, tokens.refresh_token);

    return tokens;
  }

  // Client Facebook Authentication
  async facebookAuthRedirect(user: IFacebookClient) {
    let client = await this.prisma.client.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!client) {
      client = await this.prisma.client.create({
        data: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        },
      });
    }

    const tokens = await this.getTokens(client.id, client.email);

    await this.updateClientRtHash(client.id, tokens.refresh_token);

    return tokens;
  }

  // Client register with email pochta
  async registerClient(client: CreateClientDto) {
    const hashedPassword = await argon.hash(client.password);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString(); // 6 raqamli kod
    const verificationCodeExpires = new Date();
    verificationCodeExpires.setHours(verificationCodeExpires.getHours() + 24);

    const user = await this.prisma.client.create({
      data: {
        email: client.email,
        firstname: client.firstname,
        lastname: client.lastname,
        hash: hashedPassword,
        verificationCode,
        verificationCodeExpires,
      },
    });

    await this.mailService.sendVerificationEmail(
      user.email,
      user.verificationCode,
    );

    return {
      email: user.email,
      message: 'Verification code sended successfully',
    };
  }

  async verifyEmailClient(veryfyDto: VerifyEmailDto) {
    const { email, code } = veryfyDto;

    const user = await this.prisma.client.findUnique({
      where: { email },
    });

    if (!user || user.verificationCode !== code) {
      throw new Error('Invalid verification code.');
    }

    const now = new Date();
    if (now > user.verificationCodeExpires) {
      throw new Error('Verification code has expired.');
    }

    await this.prisma.client.update({
      where: { id: user.id },
      data: { isEmailVerified: true, verificationCode: null },
    });

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHashClient(user.id, tokens.refresh_token);

    return tokens;
  }

  // cleint reset password

  async requestPasswordReset(email: string) {
    const user = await this.prisma.client.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found.');
    }

    const passwordResetCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
    const passwordResetExpires = new Date();
    passwordResetExpires.setHours(passwordResetExpires.getHours() + 1); // 1 soatlik muddat

    await this.prisma.client.update({
      where: { id: user.id },
      data: { passwordResetCode, passwordResetExpires },
    });

    await this.mailService.sendPasswordResetEmail(email, passwordResetCode);

    return { email, message: 'Reset password send code email successfully' };
  }

  async resetPassword(email: string, code: string, newPassword: string) {
    const user = await this.prisma.client.findUnique({ where: { email } });
    if (
      !user ||
      user.passwordResetCode !== code ||
      new Date() > user.passwordResetExpires
    ) {
      throw new Error('Invalid or expired password reset code.');
    }

    const hash = await argon.hash(newPassword);

    await this.prisma.client.update({
      where: { id: user.id },
      data: { hash, passwordResetCode: null, passwordResetExpires: null },
    });

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHashClient(user.id, tokens.refresh_token);

    return { message: 'password updated', ...tokens };
  }

  // logout and refresh tokens
  async logoutClient(userId: string): Promise<boolean> {
    await this.prisma.client.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
    return true;
  }

  async refreshTokensClient(userId: string, rt: string): Promise<Tokens> {
    const user = await this.prisma.client.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.hashedRt, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHashClient(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateRtHashClient(
    userId: string,
    rt: string | undefined,
  ): Promise<void> {
    const hash = await argon.hash(rt);
    await this.prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }
}
