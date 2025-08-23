export type GetUserByIdResponseType = {
  _id: string;
  email: string;
  username: string;
  passwordHash: string;
  name?: string;
  university?: string;
  department?: string;
  avatar?: string;
  balance: number;
  refreshToken: string;
};

export type GetUserByIdRequestType = {
  id: string;
};
