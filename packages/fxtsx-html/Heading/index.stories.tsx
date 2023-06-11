import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "fxtsx-html/Heading";

const meta = {
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
  args: {
    data: "headdding",
    level: 1,
  },
};
