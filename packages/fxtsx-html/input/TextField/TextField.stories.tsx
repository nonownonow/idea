import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "fxtsx-html/input/TextField/TextField";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;
export default meta;
const $key = "키";
export const Default: Story = {
  args: {
    $key,
    $label: "이름",
  },
};
