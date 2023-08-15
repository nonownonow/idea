import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaField } from "fxtsx-html/data-input/TextAreaField/TextAreaField";

const meta = {
  component: TextAreaField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextAreaField>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $key: "k",
    $label: "이름",
  },
};
