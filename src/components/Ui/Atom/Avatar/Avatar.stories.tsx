import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "ATOM/Avatar",
  component: Avatar,
  args: {
    alt: "avatar",
    src: "https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  argTypes: {},
};
