export type AuthType = {
  user: UserType;
  accessToken: string;
  refreshToken: string;
};

export type UserType = {
  id: string;
  email: string;
  username: string;
};
