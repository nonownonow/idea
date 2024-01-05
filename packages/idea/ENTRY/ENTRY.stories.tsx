import type { Meta, StoryObj } from "@storybook/react";
import { ENTRY } from "packages/idea/ENTRY/ENTRY";

const meta = {
  component: ENTRY,
  tags: ["autodocs"],
} satisfies Meta<typeof ENTRY>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $data: ["name", "유일환"],
  },
};

export const WithFormat: Story = {
  args: {
    ...Default.args,
    $keyLabel: "이름",
    $valueLabel: "나의 이름은 유일환",
  },
};
