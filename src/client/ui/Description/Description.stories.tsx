import type { Meta, StoryObj } from "@storybook/react";
import { Description } from ".";

const meta: Meta<typeof Description> = {
  title: "ATOM/Description",
  component: Description,
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Primary: Story = {
  args: {
    children: "Description",
  },
};
