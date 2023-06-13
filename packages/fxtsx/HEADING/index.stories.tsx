import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./index";

const meta = {
  component: HEADING,
  tags: ["autodocs"],
} satisfies Meta<typeof HEADING>;
export default meta;
type Story = StoryObj<typeof meta>;
export const HEADING_Default: Story = {
  args: {
    level: 1,
    data: "heading",
    children: "good",
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
  },
};
