import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "packages/idea-html/data-input/SelectField/SelectField";

const meta = {
  component: SelectField,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectField>;

type Story = StoryObj<typeof meta>;
export default meta;
export const Default: Story = {
  args: {
    id: "job",
    $label: "직업",
    $options: {
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
