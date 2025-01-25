import type { Preview } from "@storybook/react";
import { WithThemeProvider } from "./withThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [WithThemeProvider],
};

export default preview;
