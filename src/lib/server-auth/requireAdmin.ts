import { getUserFromCookies } from './auth';
import { redirect } from 'next/navigation';

export const requireAdmin = async () => {
  const user = await getUserFromCookies();
  if (!user) {
    redirect('/login');
  }
  return user;
};
