import type { Meta, StoryObj } from "@storybook/react";
import { Template } from "fxtsx-html/Template/Template";

const meta = {
  component: Template,
  tags: ["autodocs"],
} satisfies Meta<typeof Template>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {},
};
