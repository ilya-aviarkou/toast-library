export type ToastType = "success" | "warning" | "info" | "error";
export type Animation = "bounce" | "smooth";
export type Position = "top" | "center" | "bottom";

export interface ToastProps {
  text: string;
  type: ToastType;
  backgroundColor?: string;
  animation?: Animation;
  position?: Position;
}
