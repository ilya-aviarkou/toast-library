export type ToastType = "success" | "warning" | "info" | "error";
export type Animation = "bounce" | "smooth";
export type Position = "top" | "center" | "bottom";

export interface ToastProps {
  text: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
  backgroundColor?: string;
  animation?: Animation;
  position?: Position;
}
