import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $key: "태그1",
  },
};
