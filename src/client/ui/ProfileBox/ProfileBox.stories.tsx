import type { Meta, StoryObj } from "@storybook/react";
import { ProfileBox } from ".";

const meta: Meta<typeof ProfileBox> = {
  title: "Molecule/ProfileBox",
  component: ProfileBox,
  args: {
    src: "http://localhost:3000/images/defaultAvatar.webp",
  },
};

export default meta;
type Story = StoryObj<typeof ProfileBox>;

export const Primary: Story = {
  args: {
    title: "Coffee Cat",
    description: "커피챗 하실래요?",
  },
};
