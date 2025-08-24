import { TokenPayloadType } from "./auth";

export type LoginResponseType = {
  user: TokenPayloadType;
  accessToken: string;
  refreshToken: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};
