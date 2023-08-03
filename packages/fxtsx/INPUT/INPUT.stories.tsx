import type { Meta, StoryObj } from "@storybook/react";
import { INPUT } from "fxtsx/INPUT/INPUT";

const meta = {
  component: INPUT,
  tags: ["autodocs"],
} satisfies Meta<typeof INPUT>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
