import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@/components/elements/modal";
import { useState, useEffect } from "react";
import { LoginForm, LoginFormData } from "../LoginForm";
import { RegisterForm, RegisterFormData } from "../RegisterForm";
import { useSelector, useDispatch } from "@/store/setup/hooks";
import { selectIsAuthenticated } from "@/store/auth";
import { clearError } from "@/store/error";
import { useLoginMutation } from "@/services/auth/login";
import { useRegisterMutation } from "@/services/auth/register";

enum AuthModalType {
  Login = "login",
  Register = "register",
}

type AuthModalProps = {
  isVisible: boolean;
  onHide: () => void;
};

export const AuthModal: React.FC<AuthModalProps> = ({ isVisible, onHide }) => {
  const [authType, setAuthType] = useState<AuthModalType>(AuthModalType.Login);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  // Modal'ı auth başarılı olduğunda kapat
  useEffect(() => {
    if (isAuthenticated && isVisible) {
      onHide();
    }
  }, [isAuthenticated, isVisible, onHide]);

  const toggleAuthType = () => {
    dispatch(clearError());
    setAuthType(
      authType === AuthModalType.Login
        ? AuthModalType.Register
        : AuthModalType.Login
    );
  };

  // Modal kapandığında hataları temizle
  const handleClose = () => {
    dispatch(clearError());
    onHide();
  };

  const handleLoginSubmit = async (data: LoginFormData) => {
    await login({ ...data });
  };

  const handleRegisterSubmit = async (data: RegisterFormData) => {
    await register({ ...data });
  };

  return (
    <Modal
      show={isVisible}
      size="md"
      onClose={handleClose}
      className="backdrop-blur-[2px] my-8"
    >
      <div className="bg-white rounded-2xl overflow-hidden border-2 border-accent">
        <ModalHeader className="bg-gradient-to-r from-light to-parchment border-b border-accent/50 p-6">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-2xl font-bold text-heading">
                {authType === AuthModalType.Login ? "Giriş Yap" : "Kayıt Ol"}
              </h3>
              <p className="text-sm text-heading/60">
                {authType === AuthModalType.Login
                  ? "Hesabınıza giriş yapın"
                  : "Yeni hesap oluşturun"}
              </p>
            </div>
          </div>
        </ModalHeader>

        <ModalBody className="p-6 bg-white">
          <div className="space-y-6">
            {authType === AuthModalType.Login ? (
              <LoginForm
                onSubmit={handleLoginSubmit}
                isLoading={loginLoading}
              />
            ) : (
              <RegisterForm
                onSubmit={handleRegisterSubmit}
                isLoading={registerLoading}
              />
            )}
          </div>
        </ModalBody>

        <ModalFooter className="bg-light border-t border-accent/50 p-6">
          <div className="w-full text-center">
            <p className="text-sm text-heading/70 mb-2">
              {authType === AuthModalType.Login
                ? "Hesabın yok mu?"
                : "Zaten bir hesabın var mı?"}
            </p>
            <button
              onClick={toggleAuthType}
              className="inline-flex items-center gap-2 cursor-pointer text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {authType === AuthModalType.Login ? "Kayıt Ol" : "Giriş Yap"}
            </button>
          </div>
        </ModalFooter>
      </div>
    </Modal>
  );
};
