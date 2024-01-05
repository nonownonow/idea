import type { Meta, StoryObj } from "@storybook/react";
import { Ul } from "packages/idea-html/data-structure/Ul/Ul";
import type { Ol } from "packages/idea-html/data-structure/Ol/Ol";

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
