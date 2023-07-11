import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./HEADING";
import { ComponentWithRef } from "../util/util";

const meta: Meta<typeof HEADING> = {
  component: HEADING,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    level: 1,
    title: "heading",
    children: "Hello Heading!", // @ts-ignore
    $Heading: ComponentWithRef("$Heading"), // @ts-ignore
    $Hgroup: ComponentWithRef("$Hgroup"),
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
  },
  play: async () => {},
};
