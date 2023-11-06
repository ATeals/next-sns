import type { Meta, StoryObj } from "@storybook/react";
import { PostBody } from ".";

const markdown = `
  # hello

  - I'm MarkDown
  > nice
  
`;

const meta: Meta<typeof PostBody> = {
  title: "Atom/PostBody",
  component: PostBody,
  args: {
    children: markdown,
  },
};

export default meta;
type Story = StoryObj<typeof PostBody>;

export const Primary: Story = {};
