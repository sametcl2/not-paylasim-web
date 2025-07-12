import { FC, ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  color?: "gray" | "success" | "info" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Badge: FC<BadgeProps> = ({
  children,
  color = "gray",
  size = "sm",
  className = "",
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "success":
        return "bg-book-green/10 text-book-green border-book-green/20";
      case "info":
        return "bg-book-blue/10 text-book-blue border-book-blue/20";
      case "warning":
        return "bg-book-gold/10 text-book-gold border-book-gold/20";
      case "error":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-2 py-1 text-xs";
      case "md":
        return "px-3 py-1.5 text-sm";
      case "lg":
        return "px-4 py-2 text-base";
      default:
        return "px-2 py-1 text-xs";
    }
  };

  return (
    <span
      className={`
      ${getColorClasses()}
      ${getSizeClasses()}
      rounded-full
      border
      font-medium
      inline-flex
      items-center
      ${className}
    `}
    >
      {children}
    </span>
  );
};

export default Badge;
