import { UserType } from "./auth";

export type RegisterResponseType = {
  user: UserType;
  accessToken: string;
  refreshToken: string;
};

export type RegisterRequestType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
