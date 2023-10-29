import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";

const meta: Meta<typeof ButtonIcon> = {
  title: "ATOM/ButtonIcon",
  component: ButtonIcon,
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
type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    defaultIcon: "bi bi-house-door",
    clickedIcon: "bi bi-house-door-fill",
  },
};
