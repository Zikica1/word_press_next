import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { MyJwtPayload } from '../../../types';
import { refreshToken } from '../action/auth/refreshToken';

export const getUserFromCookies = async (): Promise<MyJwtPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) return null;

  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('ACCESS_TOKEN_SECRET is not defined');
  }

  const secret = process.env.ACCESS_TOKEN_SECRET;

  try {
    const decoded = jwt.verify(token, secret);

    if (typeof decoded === 'string') return null;

    return decoded as MyJwtPayload;
  } catch {
    const refreshResult = await refreshToken();

    if (!refreshResult.success || !refreshResult.accessToken) {
      return null;
    }

    try {
      const decoded = jwt.verify(refreshResult.accessToken, secret);

      if (typeof decoded === 'string') return null;

      return decoded as MyJwtPayload;
    } catch {
      return null;
    }
  }
};
