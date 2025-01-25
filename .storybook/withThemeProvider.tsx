import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme";
import { StoryContext, StoryFn } from "@storybook/react";
import { GlobalStyle } from "../src/globalStyles";

export const WithThemeProvider = (Story: StoryFn, context: StoryContext) => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Helvetica+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story {...context} />
      </ThemeProvider>
    </>
  );
};
