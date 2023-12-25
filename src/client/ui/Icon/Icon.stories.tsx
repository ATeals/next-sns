import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { BOOT_STRAP_LINK } from "@/config";

const meta: Meta<typeof Icon> = {
  title: "ATOM/Icon",
  component: Icon,
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
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    defaultIcon: "bi bi-house-door",
    clickedIcon: "bi bi-house-door-fill",
  },
};
