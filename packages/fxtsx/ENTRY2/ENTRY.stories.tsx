import type { Meta, StoryObj } from "@storybook/react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";

const meta = {
  component: ENTRY,
  tags: ["autodocs"],
} satisfies Meta<typeof ENTRY>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $key: "k",
    $value: "v",
  },
};
