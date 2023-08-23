import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $label: "버튼",
  },
};

export const WithUrl: Story = {
  args: {
    $label: "버튼",
    $url: "http://www.naver.com",
  },
};
