import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride<string[]>('roles', [context.getHandler(), context.getClass()]) || [];
    const user = context.switchToHttp().getRequest().user;

    if (!this.validateRoles(roles, user?.roles)) {
      throw new HttpException('You do not have a role.', HttpStatus.FORBIDDEN);
    }

    return true;
  }

  private validateRoles(allowedRoles: string[], userRoles: string[] = []): boolean {
    return allowedRoles.some(role => userRoles.includes(role));
  }
}
