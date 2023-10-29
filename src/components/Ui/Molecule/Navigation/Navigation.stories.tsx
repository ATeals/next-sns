import type { Meta, StoryObj } from "@storybook/react";
import { Navigation, NavList } from ".";

const meta: Meta<typeof Navigation> = {
  title: "Molecule/Navigation",
  component: Navigation,
  args: {
    NavList,
  },
  decorators: [
    (Story) => (
      <section>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        />
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
