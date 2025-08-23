export type Note = {
  _id: string;
  owner: {
    username: string;
    email: string;
    name: string;
  };
  title: string;
  description: string;
  courseName: string;
  university: string;
  professor: string;
  tags: string[];
  imageUrls: string[];
  price: number;
  isPaid: boolean;
  isActive: boolean;
  rating: number;
  ratingCount: number;
  pageCount: number;
  downloadCount: number;
  createdAt: string;
  updatedAt: string;
};

export type SearchNoteResponseType = {
  data: Note[];
  message: string;
  statusCode: number;
};

export type SearchNoteRequestType = string;

export type NoteDetailsResponseType = Note;

export type NoteDetailsRequestType = string;
