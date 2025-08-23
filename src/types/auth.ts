export type AuthType = {
  user: TokenPayloadType;
  accessToken: string;
  refreshToken: string;
};

export type TokenPayloadType = {
  id: string;
  email: string;
  username: string;
};
