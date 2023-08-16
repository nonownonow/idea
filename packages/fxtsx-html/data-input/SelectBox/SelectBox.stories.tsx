import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "fxtsx-html/data-input/SelectBox/SelectBox";

const meta = {
  component: SelectBox,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectBox>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $data: ["a", "b", "c"],
  },
};
