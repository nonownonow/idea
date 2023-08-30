import type { Meta, StoryObj } from "@storybook/react";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";

const meta = {
  component: InputBox,
  tags: ["autodocs"],
} satisfies Meta<typeof InputBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    $unCheckedMark: <span data-testid={"unCheckedMark"}>[ ]</span>,
    $checkedMark: <span data-testid={"checkedMark"}>[✔]</span>,
    $type: "checkbox",
    $label: "여자",
    $data: "women",
  },
};
