import type { Meta, StoryObj } from "@storybook/react";
import { Option } from "fxtsx-html/Value/Option/Option";

const meta = {
  component: Option,
  tags: ["autodocs"],
} satisfies Meta<typeof Option>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
    $label: "개발자",
  },
};
