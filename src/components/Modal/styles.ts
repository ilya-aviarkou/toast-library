import styled, { CSSProperties } from "styled-components";
import { ToastProps } from "../Toast/types";

export const Container = styled("div")<Pick<ToastProps, "position">>(
  ({ position }) => {
    let styles: CSSProperties = {};
    if (position === "bottom") {
      styles = {
        bottom: 10,
        right: 10,
      };
    }

    if (position === "center") {
      styles = {
        top: "50%",
        right: 10,
      };
    }

    if (position === "top") {
      styles = {
        top: 10,
        right: 10,
      };
    }

    return {
      position: "absolute",
      ...styles,
    };
  }
);
