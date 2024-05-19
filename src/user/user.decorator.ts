import { SetMetadata } from '@nestjs/common';
import { UserRole } from './models/user.interface';


export const Roles = (...roles: UserRole[]) => SetMetadata('role', roles);
