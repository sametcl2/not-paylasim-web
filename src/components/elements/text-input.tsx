import { FC, InputHTMLAttributes, forwardRef } from "react";
import { LucideIcon } from "lucide-react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: "gray" | "success" | "error" | "warning";
  sizing?: "sm" | "md" | "lg";
  helperText?: string;
  addon?: string;
  icon?: LucideIcon;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      color = "gray",
      sizing = "md",
      helperText,
      addon,
      icon: Icon,
      className = "",
      ...props
    },
    ref
  ) => {
    const getColorClasses = () => {
      switch (color) {
        case "success":
          return "border-book-green focus:border-book-green focus:ring-book-green/20";
        case "error":
          return "border-destructive focus:border-destructive focus:ring-destructive/20";
        case "warning":
          return "border-book-gold focus:border-book-gold focus:ring-book-gold/20";
        default:
          return "border-gray-300 focus:border-primary focus:ring-primary/20";
      }
    };

    const getSizingClasses = () => {
      switch (sizing) {
        case "sm":
          return "px-3 py-2 text-sm";
        case "md":
          return "px-4 py-2.5 text-base";
        case "lg":
          return "px-5 py-3 text-lg";
        default:
          return "px-4 py-2.5 text-base";
      }
    };

    return (
      <div className="w-full">
        <div className="relative">
          {addon && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {addon}
            </span>
          )}
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          )}
          <input
            ref={ref}
            className={`
            w-full
            rounded-lg
            border
            ${getColorClasses()}
            ${getSizingClasses()}
            ${addon || Icon ? "pl-10" : ""}
            focus:outline-none
            focus:ring-2
            transition-colors
            duration-200
            ${className}
          `}
            {...props}
          />
        </div>
        {helperText && (
          <p
            className={`mt-1 text-sm ${
              color === "error"
                ? "text-destructive"
                : color === "success"
                ? "text-book-green"
                : color === "warning"
                ? "text-book-gold"
                : "text-gray-500"
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

type HelperTextProps = {
  children: React.ReactNode;
  color?: "gray" | "success" | "error" | "warning";
  className?: string;
};

const HelperText: FC<HelperTextProps> = ({
  children,
  color = "gray",
  className = "",
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "text-book-green";
      case "error":
        return "text-destructive";
      case "warning":
        return "text-book-gold";
      default:
        return "text-gray-500";
    }
  };

  return (
    <p className={`text-sm ${getColorClasses()} ${className}`}>{children}</p>
  );
};

export { TextInput, HelperText };
