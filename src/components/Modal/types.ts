import { ReactNode } from "react";
import { ToastProps } from "../Toast/types";

export interface ModalProps extends Pick<ToastProps,'position'> {
    children:ReactNode
}