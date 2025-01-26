import { ToastProps } from "../Toast/types";
import { ToastInstance } from "../../types/toast";

export interface SlotProps extends Pick<ToastProps, "position"> {
  slot: ToastInstance[];
}
