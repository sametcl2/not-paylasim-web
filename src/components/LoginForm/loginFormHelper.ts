import { z } from "zod";

export enum LoginFields {
  Email = "email",
  Password = "password",
}

export type LoginFormData = {
  [LoginFields.Email]: string;
  [LoginFields.Password]: string;
};

export const defaultValues: LoginFormData = {
  [LoginFields.Email]: "",
  [LoginFields.Password]: "12345678",
};

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(12, { message: "Password must be at most 12 characters." }),
});
