import { useForm } from "react-hook-form";
import { HelperText, TextInput } from "@/components/elements/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLoginMutation } from "@/services/auth/login";
import { defaultValues, LoginFields, loginFormSchema } from "./loginFormHelper";
import Button from "../elements/button";
import { useSelector, useDispatch } from "@/store/setup/hooks";
import { selectIsLoading } from "@/store/auth";
import { selectErrorMessage, selectIsError, clearError } from "@/store/error";

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
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

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Önceki hataları temizle
    dispatch(clearError());
    await login({ ...values });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
