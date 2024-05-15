import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from './entities/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<UserRole>('role', context.getHandler());
    if (!requiredRole) {
      return true; // No role required, allow access
    }
    const { user } = context.switchToHttp().getRequest();
    return user && user.role === requiredRole;
  }
}
