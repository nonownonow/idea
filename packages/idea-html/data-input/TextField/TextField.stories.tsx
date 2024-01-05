import type { Meta, StoryObj } from "@storybook/react";
import type { TextFieldProps } from "packages/idea-html/data-input/TextField/TextField";
import { TextField } from "packages/idea-html/data-input/TextField/TextField";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    id: "키",
    $label: "이름",
  } as TextFieldProps,
};
