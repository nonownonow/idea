import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "fxtsx-html/input/Checkbox/Checkbox";

const meta = {
  component: Checkbox,
  tags: ["autoDocs"],
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    unCheckedMark: <span data-testid={"unCheckedMark"}>🙂</span>,
    checkedMark: <span data-testid={"checkedMark"}>😆</span>,
  },
};
