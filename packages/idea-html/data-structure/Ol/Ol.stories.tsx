import type { Meta, StoryObj } from "@storybook/react";
import { Ol } from "packages/idea-html/data-structure/Ol/Ol";

const meta = {
  component: Ol,
  tags: ["autodocs"],
} satisfies Meta<typeof Ol>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: ["a", "b", "c"],
  },
};
