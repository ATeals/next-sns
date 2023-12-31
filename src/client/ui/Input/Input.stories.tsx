import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "ATOM/Input",
  component: Input,
  args: {
    label: "input",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};
