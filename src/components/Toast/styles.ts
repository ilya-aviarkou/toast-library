import styled from "styled-components";
import {
  closeIconHeight,
  closeIconWidth,
  height,
  outputIconHeight,
  outputIconWidth,
  width,
} from "./config";
import { ToastProps } from "./types";

type ContainerProps = Pick<
  ToastProps,
  "type" | "backgroundColor" | "animation" | "position"
>;

export const Container = styled("div")<ContainerProps>(
  ({ theme, type, backgroundColor }) => ({
    width: width,
    height: height,
    backgroundColor: backgroundColor ?? theme.colors[type],
    padding: theme.spaces.sm,
    borderRadius: 10,
  })
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
