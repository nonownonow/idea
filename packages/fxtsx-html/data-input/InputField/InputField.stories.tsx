import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";

const meta = {
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $input: "input",
    id: "키",
    $error: "error",
  },
};
