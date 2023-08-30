import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "fxtsx-html/data-input/Select/Select";

const meta = {
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $data: {
      doctor: "DOCTOR",
      programmer: "PROGRAMMER",
      driver: "DRIVER",
    },
    $valueFormats: {
      doctor: "의사",
      programmer: "개발자",
      driver: "운전기사",
    },
  },
};
