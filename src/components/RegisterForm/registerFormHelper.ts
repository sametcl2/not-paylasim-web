import { RegisterRequestType } from "@/types/register";
import { z } from "zod";

export enum RegisterFields {
  Email = "email",
  Username = "username",
  Password = "password",
  ConfirmPassword = "confirmPassword",
}

export const defaultValues: RegisterRequestType = {
  [RegisterFields.Email]: "",
  [RegisterFields.Username]: "",
  [RegisterFields.Password]: "12345678",
  [RegisterFields.ConfirmPassword]: "12345678",
};

export const registerFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(12, { message: "Password must be at most 12 characters." }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(12, { message: "Password must be at most 12 characters." }),
});
