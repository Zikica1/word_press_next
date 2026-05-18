type MyJwtPayload = {
  UserInfo: {
    id: string;
    roles: number[];
  };
};

type AuthState = {
  accessToken?: string;
  user?: {
    username: string;
    roles: number[];
  };
  roles?: number[];
};

// type AuthContextType = {
//   auth: AuthState;
//   setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
//   persist: boolean;
//   setPersist: React.Dispatch<React.SetStateAction<boolean>>;
// };

// global.d.ts
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
