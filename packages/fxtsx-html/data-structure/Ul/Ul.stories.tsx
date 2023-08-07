import type { Meta, StoryObj } from "@storybook/react";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";
import type { Ol } from "fxtsx-html/data-structure/Ol/Ol";

const meta = {
  component: Ul,
  tags: ["autodocs"],
} satisfies Meta<typeof Ol>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: [1, 2, 3],
  },
};
