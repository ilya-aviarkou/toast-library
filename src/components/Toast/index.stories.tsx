import type { Meta, StoryObj } from "@storybook/react";
import Toast from ".";

const meta: Meta<typeof Toast> = {
  component: Toast,
  argTypes: {
    type: {
      description: "Toast type",
    },
    text: {
      description: "Toast text",
    },
    backgroundColor: {
      description: "Toast background color",
      defaultValue: undefined,
    },
    animation: {
      description: "Toast appearance animation",
      defaultValue: "smooth",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: "success",
    text: "Success toast example",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    text: "Info toast example",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    text: "Error toast example",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "Warning toast example",
  },
};
