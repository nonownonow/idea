import type { Meta, StoryObj } from "@storybook/react";
import { Dl } from "fxtsx-html/data-view/Dl/Dl";

const meta = {
  component: Dl,
  tags: ["autodocs"],
} satisfies Meta<typeof Dl>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    $data: ["a", "b", "c"],
  },
};
