import type { Meta, StoryObj } from "@storybook/react";
import { P } from "packages/idea-html/Value/P/P";

const meta = {
  component: P,
  tags: ["autodocs"],
} satisfies Meta<typeof P>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
  },
};
