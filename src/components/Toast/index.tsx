import { FC, memo, useState } from "react";
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
  onClose = () => {},
  duration = 3000,
  animation = "smooth",
  position = "bottom",
}) => {
  const [isClosing, setIsCLosing] = useState(false);

  const handleStartTransition = () => {
    setIsCLosing(true);
  };

  const handleStopTransition = () => {
    if (isClosing) {
      onClose();
    }
  };

  return (
    <Container
      type={type}
      backgroundColor={backgroundColor}
      animation={animation}
      position={position}
      duration={duration}
      onAnimationEnd={handleStopTransition}
      className={isClosing ? "closing" : ""}
    >
      <CloseIconContainer>
        <CloseIcon src={closeIcon} onClick={handleStartTransition} />
      </CloseIconContainer>
      <Output>
        <OutputIcon src={toastIcons[type]} />
        {text}
      </Output>
    </Container>
  );
};

export default memo(Toast);
