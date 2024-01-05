import type { Meta, StoryObj } from "@storybook/react";
import { Dd } from "packages/idea-html/Value/Dd/Dd";

const meta = {
  component: Dd,
  tags: ["autodocs"],
} satisfies Meta<typeof Dd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: "PROGRAMMER",
  },
};
