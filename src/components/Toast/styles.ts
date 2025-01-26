import styled, { css } from "styled-components";
import {
  closeIconHeight,
  closeIconWidth,
  height,
  outputIconHeight,
  outputIconWidth,
  width,
} from "./config";
import { ToastProps } from "./types";
import {
  fadeIn,
  fadeInBounce,
  fadeInBounceClose,
  fadeInClose,
} from "./animations";

type ContainerProps = Pick<
  ToastProps,
  "type" | "backgroundColor" | "animation" | "position" | "duration"
>;

export const Container = styled("div")<ContainerProps>(
  ({ theme, type, backgroundColor, animation }) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: ${backgroundColor ?? theme.colors[type]};
    padding: ${theme.spaces.sm}px;
    border-radius: 10px;
    animation: ${animation === "bounce" ? fadeInBounce : fadeIn} 0.5s
      ease-in-out;

    &.closing {
      animation: ${animation === "bounce" ? fadeInBounceClose : fadeInClose}
        0.5s ease-in-out forwards;
    }
  `
);

export const CloseIconContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const CloseIcon = styled("img")({
  cursor: "pointer",
  width: closeIconWidth,
  height: closeIconHeight,
});

export const Output = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: theme.spaces.sm,
}));

export const OutputIcon = styled("img")({
  width: outputIconWidth,
  height: outputIconHeight,
});
