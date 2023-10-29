import type { Meta, StoryObj } from "@storybook/react";
import { InputBox } from ".";

const markdown = `
  # hello

  - I'm MarkDown
  > nice
  
`;

const meta: Meta<typeof InputBox> = {
  title: "Atom/InputBox",
  component: InputBox,
  args: {
    onChange(e) {},
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Primary: Story = {};
