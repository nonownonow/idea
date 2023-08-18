import { Figure } from "fxtsx-html/data-view/Figure/Figure";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Figure,
  tags: ["autodocs"],
} satisfies Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

const $label = "An elephant at sunset";
export const Default: Story = {
  args: {
    $data: "elephant",
    $label,
    children: (
      <img
        alt={$label}
        src={
          "https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
        }
      />
    ),
  },
};
