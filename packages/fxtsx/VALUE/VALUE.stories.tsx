import { VALUE } from "fxtsx/VALUE/VALUE";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
} satisfies Meta<typeof VALUE>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $value: [1, 2],
    $mode: "Read",
  },
};
