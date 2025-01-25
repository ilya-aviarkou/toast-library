import { FC } from "react";
import { ToastProps } from "./types";
import {
  CloseIcon,
  CloseIconContainer,
  Container,
  Output,
  OutputIcon,
} from "./styles";
import closeIcon from "../../../public/svg/close.svg";
import { toastIcons } from "./constants";

const Toast: FC<ToastProps> = ({
  type,
  text,
  backgroundColor,
  animation = "smooth",
  position = "bottom",
}) => {
  return (
    <Container
      type={type}
      backgroundColor={backgroundColor}
      animation={animation}
      position={position}
    >
      <CloseIconContainer>
        <CloseIcon src={closeIcon} />
      </CloseIconContainer>
      <Output>
        <OutputIcon src={toastIcons[type]} />
        {text}
      </Output>
    </Container>
  );
};

export default Toast;
