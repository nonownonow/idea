import type { Meta, StoryObj } from "@storybook/react";
import { Partners } from "./Partners";

const meta = {
  component: Partners,
} satisfies Meta<typeof Partners>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {},
};
