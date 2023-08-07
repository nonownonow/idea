import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "fxtsx-html/data-structure/Table/Table";

const meta = {
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: [
      { a: 1, b: 2, c: 3 },
      { a: 11, b: 22, c: 33 },
      { a: 111, b: 222, c: 333 },
    ],
  },
};
