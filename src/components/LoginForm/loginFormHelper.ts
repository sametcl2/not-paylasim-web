import { z } from "zod";
import { LoginRequestType } from "@/types/login";

export enum LoginFields {
  Email = "email",
  Password = "password",
}

export const defaultValues: LoginRequestType = {
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
