import { FC, useEffect, useRef, useState } from "react";
import { ModalProps } from "./types";
import { createPortal } from "react-dom";
import { Container } from "./styles";

const Modal: FC<ModalProps> = ({ children, position }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    elementRef.current = document.createElement("div");
    document.body.appendChild(elementRef.current);

    setIsReady(true);

    return () => {
      if (elementRef.current) {
        document.body.removeChild(elementRef.current);
      }
    };
  }, []);

  if (!isReady || !elementRef.current) return null;

  return createPortal(
    <Container position={position}>{children}</Container>,
    elementRef.current
  );
};

export default Modal;
