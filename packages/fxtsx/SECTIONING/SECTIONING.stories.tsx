import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithRef } from "../util/util";
import { SECTIONING } from "./SECTIONING";

const meta: Meta<typeof SECTIONING> = {
  component: SECTIONING,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $Section: ComponentWithRef("$Section"),
    $Heading: ComponentWithRef("$Heading"),
    level: 1,
    title: "my-title",
    children: "my-children",
  },
};
