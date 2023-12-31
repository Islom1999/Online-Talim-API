import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Permission, Prisma, User } from '@prisma/client';
import { RoleIdDto } from './dto/role.id.dto';
import { BlockStatusDto } from './dto/block.status.user';
import { RoleType } from 'src/enumerations';
import { CreateUserDto, UpdatePasswordDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDTO } from 'src/common/_query/query.dto';
import { AdminService } from 'src/auth/admin/admin.service';

@Injectable()
export class UserService {
  constructor(
    private _prisma: PrismaService,
    private _authService: AdminService,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const existingRole = await this._prisma.role.findUnique({
      where: { id: user.role_id },
    });
    if (existingRole?.title === RoleType.SUPER_ADMIN) {
      throw new ForbiddenException(
        'Cannot update a user with role title superAdmin',
      );
    }

    return this._authService.createUser(user);
  }

  async updatePasswordUser(
    id: string,
    userPassword: UpdatePasswordDto,
  ): Promise<User> {
    const existingRole = await this._prisma.role.findUnique({
      where: { title: RoleType.SUPER_ADMIN },
    });
    const existingUser = await this._prisma.user.findUnique({
      where: { id },
    });
    if (!existingUser) {
      throw new ForbiddenException(`User with ID does not exist`);
    }
    if (existingUser.role_id == existingRole.id) {
      throw new ForbiddenException(
        'Cannot update a user with role title superAdmin',
      );
    }

    return this._authService.updateUserPassword(id, userPassword);
  }

  async getAll(): Promise<any> {
    const role = await this._prisma.role.findUnique({where: { title: RoleType.SUPER_ADMIN}})

    const user = await this._prisma.user.findMany({
      orderBy: { id: 'asc' },
      where: {
        role_id: {notIn: [role.id]}
      },
      include: {
        role: true,
      },
    });

    if (!user[0])
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    // omit password
    user.forEach((u) => {
      delete u.hash;
      delete u.hashedRt;
    });

    return { data: user };
  }

  async getAllPagination(queryDto: QueryDTO): Promise<any> {
    const search = queryDto.search || '';
    const page = +queryDto.page || 1;
    const limit = +queryDto.limit || 25;
    const skip = (page - 1) * limit;
    const count = await this._prisma.user.count();

    const role = await this._prisma.role.findUnique({where: { title: RoleType.SUPER_ADMIN}})

    const user = await this._prisma.user.findMany({
      orderBy: { id: 'asc' },
      where: {
        AND:{
          email: {
            contains: search,
            mode: 'insensitive',
          },
          role_id: {notIn: [role.id]}
        }
      },
      skip,
      take: limit,
      include: {
        role: true,
      },
    });

    if (!user[0])
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    // omit password
    user.forEach((u) => {
      delete u.hash;
      delete u.hashedRt;
    });

    return { data: user, count };
  }


  async getById(id: string): Promise<User> {
    const user = await this._prisma.user.findUnique({
      where: { id },
      //   include: { role: true },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    // omit password
    delete user.hash;
    delete user.hashedRt;

    return user;
  }

  async getPermissionByToken(id: string): Promise<Permission[]> {
    const user = await this._prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user.role.permissions;
  }

  async addRoleById(id: string, roleIdDto: RoleIdDto): Promise<User> {
    try {
      const existingRole = await this._prisma.role.findUnique({
        where: { title: RoleType.SUPER_ADMIN },
      });
      const existingUser = await this._prisma.user.findUnique({
        where: { id },
      });
      if (!existingUser) {
        throw new ForbiddenException(`User with ID does not exist`);
      }
      if (existingUser.role_id == existingRole.id) {
        throw new ForbiddenException(
          'Cannot update a user with role title superAdmin',
        );
      }
      if (roleIdDto.role_id == existingRole.id) {
        throw new ForbiddenException(
          'Cannot update a user with role title superAdmin',
        );
      }
      const user = await this._prisma.user.update({
        where: { id },
        include: { role: true },
        data: { role_id: roleIdDto.role_id, isBlock: roleIdDto.isBlock },
      });

      // omit password
      delete user.hash;
      delete user.hashedRt;

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('This role already exists');
      }
      throw error;
    }
  }

  async removeRoleById(id: string): Promise<User> {
    try {
      const existingRole = await this._prisma.role.findUnique({
        where: { title: RoleType.SUPER_ADMIN },
      });
      const existingUser = await this._prisma.user.findUnique({
        where: { id },
      });
      if (!existingUser) {
        throw new ForbiddenException(`User with ID does not exist`);
      }
      if (existingUser.role_id == existingRole.id) {
        throw new ForbiddenException(
          'Cannot update a user with role title superAdmin',
        );
      }
      const user = await this._prisma.user.update({
        where: { id },
        data: { role_id: null },
      });

      // omit password
      delete user.hash;
      delete user.hashedRt;

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('This role already exists');
      }
      throw error;
    }
  }

  async blockUserById(
    id: string,
    blockStatusDto: BlockStatusDto,
  ): Promise<User> {
    try {
      const existingRole = await this._prisma.role.findUnique({
        where: { title: RoleType.SUPER_ADMIN },
      });
      const existingUser = await this._prisma.user.findUnique({
        where: { id },
      });
      if (!existingUser) {
        throw new ForbiddenException(`User with ID does not exist`);
      }
      if (existingUser.role_id == existingRole.id) {
        throw new ForbiddenException(
          'Cannot block a user with role title superAdmin',
        );
      }
      const user = await this._prisma.user.update({
        where: { id },
        data: { isBlock: blockStatusDto.isBlock },
      });

      // omit password
      delete user.hash;
      delete user.hashedRt;

      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('This role already exists');
      }
      throw error;
    }
  }
}
