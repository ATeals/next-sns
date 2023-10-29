import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "ATOM/Icon",
  component: Icon,
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
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    defaultIcon: "bi bi-house-door",
    clickedIcon: "bi bi-house-door-fill",
  },
};
