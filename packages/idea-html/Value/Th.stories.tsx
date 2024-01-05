import type { Meta, StoryObj } from "@storybook/react";
import { Th } from "packages/idea-html/Value/Th";

const meta = {
  component: Th,
  tags: ["autodocs"],
} satisfies Meta<typeof Th>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
  },
};
