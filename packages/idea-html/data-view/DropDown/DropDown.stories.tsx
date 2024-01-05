import { DropDown } from "packages/idea-html/data-view/DropDown/DropDown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: DropDown,
  tags: ["autodocs"],
} satisfies Meta<typeof DropDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: [
      "https://www.naver.com",
      "https://www.google",
      "https://www.facebook.com",
    ],
  },
};
