import { FC, ReactNode } from "react";
import { Button as FlowbiteButton, Spinner } from "flowbite-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  type = "button",
  onClick,
}) => {
  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <>
          <Spinner
            size="sm"
            aria-label="Info spinner example"
            className="me-3"
            light
          />
          Yükleniyor...
        </>
      );
    }
    return children;
  };

  return (
    <FlowbiteButton
      className={`rounded-lg transition cursor-pointer ${variant} ${size}`}
      type={type}
      disabled={isLoading}
      onClick={onClick}
    >
      {renderButtonContent()}
    </FlowbiteButton>
  );
};

export default Button;
