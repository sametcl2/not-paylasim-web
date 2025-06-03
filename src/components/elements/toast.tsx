import { FC, ReactElement } from "react";
import { Toast as FlowbiteToast, ToastToggle } from "flowbite-react";
import { Check, X, TriangleAlert } from "lucide-react";

type ToastType = "success" | "error" | "warning";

type ToastProps = {
  type: ToastType;
  message: string;
};

export const Toast: FC<ToastProps> = ({ type, message }) => {
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
    <FlowbiteToast>
      <div
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${bgMap[type]}`}
      >
        {iconMap[type]}
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <ToastToggle />
    </FlowbiteToast>
  );
};
