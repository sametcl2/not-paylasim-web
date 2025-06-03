import { UserType } from "./auth";

export type LoginResponseType = {
  user: UserType;
  accessToken: string;
  refreshToken: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};
