import { TokenPayloadType } from "./auth";

export type RegisterResponseType = {
  user: TokenPayloadType;
  accessToken: string;
  refreshToken: string;
};

export type RegisterRequestType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
