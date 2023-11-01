import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "ATOM/Avatar",
  component: Avatar,
  args: {
    alt: "avatar",
    src: "http://localhost:3000/images/defaultAvatar.webp",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  argTypes: {},
};
