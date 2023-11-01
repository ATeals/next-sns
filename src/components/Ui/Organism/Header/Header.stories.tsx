import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { BOOT_STRAP_LINK } from "@/constants";

const meta: Meta<typeof Header> = {
  title: "Organism/Header",
  component: Header,
  decorators: [
    (Story) => (
      <section>
        <link rel="stylesheet" href={BOOT_STRAP_LINK} />
        <Story />
      </section>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
