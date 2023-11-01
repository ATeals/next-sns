import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from ".";
import { BOOT_STRAP_LINK, HEAD_NAVIGATIONS } from "@/constants";

const meta: Meta<typeof Navigation> = {
  title: "Molecule/Navigation",
  component: Navigation,
  args: {
    NavList: HEAD_NAVIGATIONS,
  },
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
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};
