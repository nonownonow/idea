import { FileField } from "fxtsx-html/data-input/FileField/FileField";
import type { Meta, StoryObj } from "@storybook/react";
import imgSrc from "./fixture/mo-common-btn-upload.png";

const meta = {
  component: FileField,
  tags: ["autodocs"],
} satisfies Meta<typeof FileField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "file-field",
    $label: <img src={imgSrc} alt={"test-img"} />,
  },
};
