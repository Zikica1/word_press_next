import { getUserFromCookies } from './auth';

export const requireApiRoles = async (...allowedRoles: number[]) => {
  const user = await getUserFromCookies();

  if (!user) {
    throw new Error('UNAUTHORIZED');
  }

  const hasRole = user.UserInfo.roles.some((role) =>
    allowedRoles.includes(role),
  );

  if (!hasRole) {
    throw new Error('FORBIDDEN');
  }

  return user;
};
