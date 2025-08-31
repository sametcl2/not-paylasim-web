import { Note } from "./note";

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
  publishedNotesCount: number;
  purchasedNotesCount: number;
  ownedNotes: Note[];
  purchasedNotes: Note[];
  membershipDate: string;
  refreshToken: string;
};

export type GetUserByIdRequestType = {
  id: string;
};
