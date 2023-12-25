import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";
import { BOOT_STRAP_LINK } from "@/config";

const meta: Meta<typeof ButtonIcon> = {
  title: "ATOM/ButtonIcon",
  component: ButtonIcon,
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
type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    defaultIcon: "bi bi-house-door",
    clickedIcon: "bi bi-house-door-fill",
  },
};
