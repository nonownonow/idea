import type { Meta, StoryObj } from "@storybook/react";
import { Td } from "fxtsx-html/Value/Td/Td";

const meta = {
  component: Td,
  tags: ["autodocs"],
} satisfies Meta<typeof Td>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
  },
};
