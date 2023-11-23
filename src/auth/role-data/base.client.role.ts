import { PermissionClient } from '@prisma/client';
import { RoleTypeClient } from 'src/enumerations';

export const baseClient: { title: string; permissions: PermissionClient[] } = {
  title: RoleTypeClient.BASE_CLIENT,
  permissions: ['product_view'],
};
