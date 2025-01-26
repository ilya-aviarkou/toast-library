import { ToastProps } from "../components/Toast/types";
import { baseToastConfig } from "../constants";
import { Subscriber, ToastInstance } from "../types/toast";
import { v4 as uuidv4 } from "uuid";

export class Toast {
  static #instance: Toast;
  private toasts: ToastInstance[] = [];
  private subscribers: Subscriber[] = [];

  public constructor() {
    if (!Toast.#instance) {
      Toast.#instance = this;
    }

    return Toast.#instance;
  }

  public subscribe(callback: Subscriber) {
    this.subscribers.push(callback);
  }

  public unsubscribe(callback: Subscriber) {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  }

  public notifySubscribers() {
    this.subscribers.forEach((subscriber) => subscriber(this.toasts));
  }

  private generateOptions(toast: ToastProps): ToastProps {
    return {
      ...baseToastConfig[toast.type],
      ...toast,
    };
  }

  public open(toast: ToastProps) {
    if (this.toasts.length < 3) {
      const toastId = uuidv4();
      this.toasts.push({ ...this.generateOptions(toast), id: toastId });
      this.notifySubscribers();
    }
  }

  public remove(toastId: string) {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    this.notifySubscribers();
  }
}

export const toast = new Toast();
