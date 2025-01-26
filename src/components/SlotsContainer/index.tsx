import { useMemo } from "react";
import Slot from "../Slot";
import { useToast } from "../../hooks/useToast";
import { positions } from "../../constants";

const SlotsContainer = () => {
  const { toasts } = useToast();

  const slots = useMemo(
    () =>
      positions
        .map((position) => {
          return toasts.filter((toast) => toast.position === position);
        })
        .filter((item) => item.length > 0),
    [toasts]
  );

  return (
    <>
      {slots.length > 0 &&
        slots.map((slot) => (
          <Slot
            key={slot[0].position}
            position={slot[0].position}
            slot={slot}
          />
        ))}
    </>
  );
};

export default SlotsContainer;
