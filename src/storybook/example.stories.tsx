import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/Toast";
import { useToast } from "../hooks/useToast";
import { ToastProps } from "../components/Toast/types";

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
    position: {
      description: "Toast position",
      defaultValue: "bottom",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const TestComponent = (props: ToastProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    toast.open(props);
  };

  return <button onClick={handleClick}>Add toast</button>;
};

export const Success: Story = {
  args: {
    type: "success",
    text: "Success toast example",
    animation: "smooth",
    position: "bottom",
    duration: 3000,
  },
  render: (props) => {
    return <TestComponent {...props} />;
  },
};
