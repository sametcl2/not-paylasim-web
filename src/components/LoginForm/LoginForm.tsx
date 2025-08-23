import { useForm } from "react-hook-form";
import { HelperText, TextInput } from "@/components/elements/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  defaultValues,
  LoginFields,
  loginFormSchema,
  LoginFormData,
} from "./loginFormHelper";
import Button from "../elements/button";
import { useSelector, useDispatch } from "@/store/setup/hooks";
import { selectErrorMessage, selectIsError, clearError } from "@/store/error";

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const isError = useSelector(selectIsError);

  const {
    formState: { errors },
    handleSubmit,
    register: registerField,
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  async function handleFormSubmit(values: z.infer<typeof loginFormSchema>) {
    dispatch(clearError());
    await onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3 block">
        <label>E-Mail</label>
        <TextInput
          type="email"
          color={errors[LoginFields.Email] ? "error" : "gray"}
          {...registerField(LoginFields.Email, { required: true })}
        />
        {errors[LoginFields.Email] && (
          <HelperText>{errors[LoginFields.Email].message}</HelperText>
        )}
      </div>
      <div className="mb-3 block">
        <label>Şifre</label>
        <TextInput
          type="password"
          color={errors[LoginFields.Password] ? "error" : "gray"}
          {...registerField(LoginFields.Password, { required: true })}
        />
        {errors[LoginFields.Password] && (
          <HelperText>{errors[LoginFields.Password].message}</HelperText>
        )}
      </div>
      <Button type="submit" isLoading={isLoading}>
        Onayla
      </Button>
      {isError && <HelperText color="error">{errorMessage}</HelperText>}
    </form>
  );
};
