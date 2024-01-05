import type { Meta, StoryObj } from "@storybook/react";
import type { CardProps } from "packages/idea-html/data-structure/Card/Card";
import { Card } from "packages/idea-html/data-structure/Card/Card";

const meta = {
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: { a: 1, b: 2, c: 3 },
  } as CardProps<any>,
};
