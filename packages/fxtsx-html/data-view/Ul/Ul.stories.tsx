import type { Meta, StoryObj } from "@storybook/react";
import { Ul } from "fxtsx-html/data-view/Ul/Ul";

const meta = {
  component: Ul,
  tags: ["autodocs"],
} satisfies Meta<typeof Ul>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: [1, 2, 3],
  },
};
