import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./HEADING";
import { MockComponent } from "../util/util";

const meta: Meta<typeof HEADING> = {
  component: HEADING,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;
export const HEADING_Default: Story = {
  args: {
    level: 1,
    data: "heading",
    children: "Hello Heading!", // @ts-ignore
    Heading: "없음", // @ts-ignore
    Hgroup: "없음",
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    Heading: {
      options: ["없음"],
      mapping: {
        없음: MockComponent,
      },
    },
    Hgroup: {
      options: ["없음"],
      mapping: {
        없음: MockComponent,
      },
    },
  },
  play: async ({ canvasElement }) => {},
};
