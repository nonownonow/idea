import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset } from "packages/idea-html/sectioning/index";

const meta = {
  component: Fieldset,
  tags: ["autodocs"],
} satisfies Meta<typeof Fieldset>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $title: "My fieldset",
    $level: 1,
  },
};
