import type { Meta, StoryObj } from "@storybook/react";
import { Tr } from "packages/idea-html/data-structure/Tr/Tr";

const meta = {
  component: Tr,
  tags: ["autodocs"],
} satisfies Meta<typeof Tr>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: { a: 1, b: 2, c: 3 },
  },
};
