import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: DICTIONARY,
} satisfies Meta<typeof DICTIONARY>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      keyA: "ValueA",
      keyB: "ValueB",
      keyC: "ValueC",
    },
  },
};
