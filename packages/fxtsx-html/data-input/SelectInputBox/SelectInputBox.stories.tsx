import type { Meta, StoryObj } from "@storybook/react";
import { SelectInputBox } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox";

const meta = {
  component: SelectInputBox,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectInputBox>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $data: { programmer: "PROGRAMMER", doctor: "DOCTOR", driver: "DRIVER" },
    $key: "job",
    $valueFormats: { programmer: "개발자", doctor: "의사", driver: "운전기사" },
  },
};
