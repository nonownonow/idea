import { CheckOption } from "packages/idea-html/Value/CheckOption/CheckOption";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CheckOption,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckOption>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
    $valueLabel: "개발자",
  },
};
