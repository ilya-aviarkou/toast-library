import { ToastProps } from "../components/Toast/types";

export type ToastInstance = ToastProps & {
  id: string;
};

export type Subscriber = (toasts: ToastInstance[]) => void;
