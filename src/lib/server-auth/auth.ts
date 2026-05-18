import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { MyJwtPayload } from '../../../types';
import { refreshToken } from '../action/auth/refreshToken';

export const getUserFromCookies = async (): Promise<MyJwtPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) return null;

  try {
    const decode = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!,
    ) as MyJwtPayload;
    return decode;
  } catch {
    const refreshResult = await refreshToken();
    if (!refreshResult.success) return null;

    const newToken = cookieStore.get('accessToken')?.value;
    if (!newToken) return null;

    return jwt.verify(
      newToken,
      process.env.ACCESS_TOKEN_SECRET!,
    ) as MyJwtPayload; //verify vraća payload
  }
};
