import type { Meta, StoryObj } from "@storybook/react";
import { P } from "fxtsx-html/data-view/P";

const meta = {
  component: P,
  tags: ["autodocs"],
} satisfies Meta<typeof P>;
type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $defaultValue: "hello",
    $mode: "Read",
  },
};
