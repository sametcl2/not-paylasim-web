export type Note = {
  _id: string;
  owner: string;
  title: string;
  description: string;
  courseName: string;
  university: string;
  professor: string;
  tags: string[];
  imageUrls: string[];
  isPaid: boolean;
  isActive: boolean;
  rating: number;
  ratingCount: number;
  downloadCount: number;
  createdAt: string;
  updatedAt: string;
};

export type SearchNoteResponseType = Note[];

export type SearchNoteRequestType = string;
