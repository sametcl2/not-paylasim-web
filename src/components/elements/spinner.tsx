import { FC } from "react";
import { Loader2 } from "lucide-react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Spinner: FC<SpinnerProps> = ({ size = "md", className = "" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "md":
        return "w-6 h-6";
      case "lg":
        return "w-8 h-8";
      default:
        return "w-6 h-6";
    }
  };

  return (
    <Loader2 className={`animate-spin ${getSizeClasses()} ${className}`} />
  );
};

export default Spinner;
