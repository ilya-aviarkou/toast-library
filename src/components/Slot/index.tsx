import { FC, memo } from "react";
import { SlotProps } from "./types";
import { Container } from "./styles";
import Modal from "../Modal";
import Toast from "../Toast";
import { toast as toastInstance } from "../../utils/Toast";

const Slot: FC<SlotProps> = ({ position, slot }) => {
  const handleClose = (toastId: string) => () => {
    toastInstance.remove(toastId);
  };

  return (
    <Modal position={position}>
      <Container>
        {slot.map((toast) => (
          <Toast {...toast} key={toast.id} onClose={handleClose(toast.id)} />
        ))}
      </Container>
    </Modal>
  );
};

export default memo(Slot);
