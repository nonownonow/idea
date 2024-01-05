import type { Meta, StoryObj } from "@storybook/react";
import { Dt } from "packages/idea-html/Value/Dt/Dt";

const meta = {
  component: Dt,
  tags: ["autodocs"],
} satisfies Meta<typeof Dt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
  },
};
