import { FC, ReactElement } from "react";
import { Check, X, TriangleAlert } from "lucide-react";

type ToastType = "success" | "error" | "warning";

type ToastProps = {
  type: ToastType;
  message: string;
  onClose?: () => void;
};

export const Toast: FC<ToastProps> = ({ type, message, onClose }) => {
  const iconMap: Record<ToastType, ReactElement> = {
    success: <Check className="h-5 w-5 text-green-500" />,
    error: <X className="h-5 w-5 text-red-500" />,
    warning: <TriangleAlert className="h-5 w-5 text-orange-500" />,
  };

  const bgMap: Record<ToastType, string> = {
    success: "bg-green-100 text-green-500",
    error: "bg-red-100 text-red-500",
    warning: "bg-orange-100 text-orange-500",
  };

  return (
    <div className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow border border-gray-200">
      <div
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${bgMap[type]}`}
      >
        {iconMap[type]}
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};
