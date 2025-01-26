import { Position, ToastProps } from "../components/Toast/types";

export const positions: Position[] = ["bottom", "center", "top"];

type BaseConfig = {
  [k in ToastProps["type"]]: ToastProps;
};
export const baseToastConfig: BaseConfig = {
  error: {
    type: "error",
    text: "Error toast",
    animation: "smooth",
    backgroundColor: undefined,
    duration: 3000,
    position: "bottom",
  },
  info: {
    type: "info",
    text: "Info toast",
    animation: "smooth",
    backgroundColor: undefined,
    duration: 3000,
    position: "bottom",
  },
  success: {
    type: "success",
    text: "Success toast",
    animation: "smooth",
    backgroundColor: undefined,
    duration: 3000,
    position: "bottom",
  },
  warning: {
    type: "warning",
    text: "Warning toast",
    animation: "smooth",
    backgroundColor: undefined,
    duration: 3000,
    position: "bottom",
  },
};
