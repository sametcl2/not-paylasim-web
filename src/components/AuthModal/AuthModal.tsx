import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

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

  const toggleAuthType = () => {
    setAuthType(
      authType === AuthModalType.Login
        ? AuthModalType.Register
        : AuthModalType.Login
    );
  };

  return (
    <>
      <Modal show={isVisible} size="md" onClose={onHide} popup>
        <ModalHeader>
          {authType === AuthModalType.Login ? "Giriş Yap" : "Kayıt Ol"}
        </ModalHeader>
        <ModalBody>
          {authType === AuthModalType.Login ? <LoginForm /> : <RegisterForm />}
        </ModalBody>
        <ModalFooter>
          <a className="cursor-pointer" onClick={toggleAuthType}>
            <p className="text-sm">
              {authType === AuthModalType.Login
                ? "Hesabın yok mu?"
                : "Zaten bir hesabın var mı?"}
            </p>
          </a>
        </ModalFooter>
      </Modal>
    </>
  );
};
