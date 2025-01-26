import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const fadeInClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const fadeInBounce = keyframes`
  0% {
    transform: translateX(100%);
  }
  20% {
    transform: translateX(-10%);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const fadeInBounceClose = keyframes`
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(10%);
  }
  50% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(100%);
  }
`;
