import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast context must be provided");
  }

  return context;
};
