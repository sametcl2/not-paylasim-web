import { z } from "zod";

export enum CreateNoteFields {
  Title = "title",
  Description = "description",
  CourseName = "courseName",
  University = "university",
  Professor = "professor",
  Price = "price",
  IsPaid = "isPaid",
  Tags = "tags",
  ImageUrls = "imageUrls",
  PageCount = "pageCount",
  IsActive = "isActive",
}

export type CreateNoteFormData = {
  [CreateNoteFields.Title]: string;
  [CreateNoteFields.Description]: string;
  [CreateNoteFields.CourseName]: string;
  [CreateNoteFields.University]: string;
  [CreateNoteFields.Professor]: string;
  [CreateNoteFields.Price]: number;
  [CreateNoteFields.IsPaid]: boolean;
  [CreateNoteFields.Tags]: string[];
  [CreateNoteFields.ImageUrls]: string[];
  [CreateNoteFields.PageCount]: number;
  [CreateNoteFields.IsActive]: boolean;
};

export const defaultValues: CreateNoteFormData = {
  [CreateNoteFields.Title]: "",
  [CreateNoteFields.Description]: "",
  [CreateNoteFields.CourseName]: "",
  [CreateNoteFields.University]: "",
  [CreateNoteFields.Professor]: "",
  [CreateNoteFields.Price]: 1,
  [CreateNoteFields.IsPaid]: true,
  [CreateNoteFields.Tags]: [],
  [CreateNoteFields.ImageUrls]: [],
  [CreateNoteFields.PageCount]: 1,
  [CreateNoteFields.IsActive]: true,
};

export const createNoteFormSchema = z.object({
  title: z
    .string()
    .min(1, "Not başlığı gereklidir.")
    .max(100, "Not başlığı çok uzun."),
  description: z
    .string()
    .min(10, "Açıklama en az 10 karakter olmalıdır.")
    .max(500, "Açıklama çok uzun."),
  courseName: z.string().min(1, "Ders adı gereklidir."),
  university: z.string().min(1, "Üniversite gereklidir."),
  professor: z.string().min(1, "Öğretim üyesi gereklidir."),
  price: z.number().min(1, "Fiyat en az 1 TL olmalıdır."),
  isPaid: z.boolean(),
  tags: z
    .array(z.string())
    .min(1, "En az 1 etiket eklemelisiniz.")
    .max(10, "En fazla 10 etiket ekleyebilirsiniz."),
  imageUrls: z
    .array(z.string())
    .min(1, "En az 1 görsel eklemelisiniz.")
    .max(20, "En fazla 20 görsel ekleyebilirsiniz."),
  pageCount: z.number().min(1, "Sayfa sayısı en az 1 olmalıdır."),
  isActive: z.boolean(),
});
