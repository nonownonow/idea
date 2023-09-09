import type { Meta, StoryObj } from "@storybook/react";
import { VALUE } from "fxtsx/VALUE/VALUE";

const meta = {
  component: VALUE,
  tags: ["autodocs"],
} satisfies Meta<typeof VALUE>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
    $valueLabel: "개발자",
  },
};
