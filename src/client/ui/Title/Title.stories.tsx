import type { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";

const meta: Meta<typeof Title> = {
  title: "ATOM/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    children: "Title",
    color: "black",
  },
  argTypes: {
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
  },
};
