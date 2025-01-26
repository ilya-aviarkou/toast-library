import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ToastInstance } from "../types/toast";
import { toast, Toast } from "../utils/Toast";
import SlotsContainer from "../components/SlotsContainer";

export const ToastContext = createContext<{
  toast: Toast;
  toasts: ToastInstance[];
}>({
  toast: toast,
  toasts: [],
});

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);
  useEffect(() => {
    const handleChangeToasts = (updatedToasts: ToastInstance[]) => {
      setToasts([...updatedToasts]);
    };

    toast.subscribe(handleChangeToasts);

    return () => {
      toast.unsubscribe(handleChangeToasts);
    };
  }, []);

  const value = useMemo(
    () => ({
      toast,
      toasts,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>
      <SlotsContainer />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
