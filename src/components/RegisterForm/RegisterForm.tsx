import { HelperText, TextInput } from "@/components/elements/text-input";
import Button from "@/components/elements/button";
import Spinner from "@/components/elements/spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterMutation } from "@/services/auth/register";
import {
  defaultValues,
  RegisterFields,
  registerFormSchema,
} from "./registerFormHelper";

export const RegisterForm = () => {
  const [register, { isError, isLoading }] = useRegisterMutation();

  const {
    formState: { errors },
    handleSubmit,
    register: registerField,
  } = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    await register({ ...values });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 block">
        <label>E-Mail</label>
        <TextInput
          type="email"
          color={errors[RegisterFields.Username] ? "error" : "gray"}
          {...registerField(RegisterFields.Email, { required: true })}
        />
        {errors[RegisterFields.Email] && (
          <HelperText>{errors[RegisterFields.Email].message}</HelperText>
        )}
      </div>
      <div className="mb-3 block">
        <label>Kullanıcı Adı</label>
        <TextInput
          type="text"
          color={errors[RegisterFields.Username] ? "error" : "gray"}
          {...registerField(RegisterFields.Username, { required: true })}
        />
        {errors[RegisterFields.Username] && (
          <HelperText>{errors[RegisterFields.Username].message}</HelperText>
        )}
      </div>
      <div className="mb-3 block">
        <label>Şifre</label>
        <TextInput
          type="password"
          color={errors[RegisterFields.Password] ? "error" : "gray"}
          {...registerField(RegisterFields.Password, { required: true })}
        />
        {errors[RegisterFields.Password] && (
          <HelperText>{errors[RegisterFields.Password].message}</HelperText>
        )}
      </div>
      <div className="mb-3 block">
        <label>Şifre Tekrar</label>
        <TextInput
          type="password"
          color={errors[RegisterFields.ConfirmPassword] ? "error" : "gray"}
          {...registerField(RegisterFields.ConfirmPassword, { required: true })}
        />
        {errors[RegisterFields.ConfirmPassword] && (
          <HelperText>
            {errors[RegisterFields.ConfirmPassword].message}
          </HelperText>
        )}
      </div>
      {isError && <HelperText>Kayıt işlemi başarısız oldu.</HelperText>}
      <Button type="submit" disabled={isLoading} className="mt-6">
        {isLoading ? <Spinner size="sm" className="me-3" /> : null}
        Onayla
      </Button>
    </form>
  );
};
