import { SECTION } from "./SECTION";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithRef } from "../util/util";

const meta: Meta<typeof SECTION> = {
  component: SECTION,
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
