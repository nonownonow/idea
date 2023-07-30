import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "fxtsx-html/data-view/Card/Card";

const meta = {
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: { a: 1, b: 2, c: 3 },
  },
};
