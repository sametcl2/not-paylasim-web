import { FC, ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const Modal: FC<ModalProps> = ({
  children,
  show,
  onClose,
  size = "md",
  className = "",
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      default:
        return "max-w-md";
    }
  };

  if (!show) return null;

  return (
    <div className="fixed h-screen inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed h-screen inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`
        relative bg-white rounded-lg shadow-xl border border-gray-200 w-full mx-4
        max-h-[90vh] overflow-y-auto
        ${getSizeClasses()}
        ${className}
      `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {children}
      </div>
    </div>
  );
};

type ModalHeaderProps = {
  children: ReactNode;
  className?: string;
};

const ModalHeader: FC<ModalHeaderProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

type ModalBodyProps = {
  children: ReactNode;
  className?: string;
};

const ModalBody: FC<ModalBodyProps> = ({ children, className = "" }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

const ModalFooter: FC<ModalFooterProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 flex justify-end gap-2 ${className}`}
    >
      {children}
    </div>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
