import { Aside } from "packages/idea-html/sectioning/Aside/Aside";
import type { Meta, StoryObj } from "@storybook/react";
import { SECIONING_Default } from "packages/idea/SECTIONING/SECTIONING.stories";

const meta = {
  component: Aside,
  tags: ["autodocs"],
} satisfies Meta<typeof Aside>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Aside_Default: Story = {
  args: {
    ...SECIONING_Default.args,
  },
};
