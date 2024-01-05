import { Nav } from "./Nav";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Nav,
  tags: ["autodocs"],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $title: "nav 타이틀",
    $level: 1,
  },
};
