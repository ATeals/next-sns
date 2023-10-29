import type { Meta, StoryObj } from "@storybook/react";
import { ProfileBox } from ".";

const meta: Meta<typeof ProfileBox> = {
  title: "Molecule/ProfileBox",
  component: ProfileBox,
  args: {
    src: "https://i.pinimg.com/474x/63/4c/53/634c53818319ec85a06a172442db9e16.jpg",
  },
};

export default meta;
type Story = StoryObj<typeof ProfileBox>;

export const Primary: Story = {
  args: {
    title: "고먐미",
    description: "세상에서 가장 귀여운 생물",
  },
};
