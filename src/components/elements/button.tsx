import { FC, ReactNode } from "react";
import Spinner from "./spinner";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "info";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "sm",
  isLoading,
  type = "button",
  onClick,
  disabled = false,
  outline = false,
  className = "",
}) => {
  const getVariantClasses = () => {
    if (outline) {
      switch (variant) {
        case "primary":
          return "bg-transparent text-primary border-primary/60 border-2 hover:bg-primary/10";
        case "secondary":
          return "bg-transparent text-secondary border-secondary/60 border-2 hover:bg-secondary/10";
        case "danger":
          return "bg-transparent text-destructive border-destructive/60 border-2 hover:bg-destructive/10";
        case "success":
          return "bg-transparent text-book-green border-book-green/60 border-2 hover:bg-book-green/10";
        case "info":
          return "bg-transparent text-book-blue border-book-blue/60 border-2 hover:bg-book-blue/10";
        default:
          return "bg-transparent text-primary border-primary/60 border-2 hover:bg-primary/10";
      }
    }

    switch (variant) {
      case "primary":
        return "bg-primary text-cream border-primary/30 shadow-sm hover:shadow-md";
      case "secondary":
        return "bg-secondary text-cream border-secondary/30 shadow-sm hover:shadow-md";
      case "outline":
        return "bg-transparent text-primary border-primary/40 border-2 shadow-sm hover:shadow-md";
      case "danger":
        return "bg-destructive text-cream border-destructive/30 shadow-sm hover:shadow-md";
      case "success":
        return "bg-book-green text-cream border-book-green/30 shadow-sm hover:shadow-md";
      case "info":
        return "bg-book-blue text-cream border-book-blue/30 shadow-sm hover:shadow-md";
      default:
        return "bg-primary text-cream border-primary/30 shadow-sm hover:shadow-md";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm font-medium";
      case "md":
        return "px-6 py-2.5 text-base font-medium";
      case "lg":
        return "px-8 py-3 text-lg font-medium";
      default:
        return "px-6 py-2.5 text-base font-medium";
    }
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center gap-2">
          <Spinner size="sm" className="text-current" />
          <span>Yükleniyor...</span>
        </div>
      );
    }
    return children;
  };

  return (
    <button
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg
        border
        transition-all
        duration-250
        ease-out
        cursor-pointer
        focus:outline-none
        focus:ring-2
        focus:ring-primary/30
        focus:ring-offset-1
        hover:scale-[1.01]
        active:scale-[0.99]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        font-medium
        tracking-normal
        relative
        overflow-hidden
        select-none
        ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {renderButtonContent()}
    </button>
  );
};

export default Button;
