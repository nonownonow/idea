import type { Meta, StoryObj } from "@storybook/react";
import type { HEADINGProps } from "./index";
import { HEADING } from "./index";
import { forwardRef } from "react";
import { Heading } from "fxtsx-html/Heading";

const meta = {
  component: HEADING,
  tags: ["autodocs"],
  argTypes: {
    Heading: {
      options: ["html", "Mui"],
      control: { type: "radio" },
      mapping: {
        html: Heading,
        Mui: forwardRef(({ data, level, children, ...p }, ref) => (
          <h2 {...p} ref={ref}>
            {data} {level} {children}
          </h2>
        )),
      } as {
        [k: string]: HEADINGProps["Heading"];
      },
    },
  },
} satisfies Meta<typeof HEADING>;
export default meta;
type Story = StoryObj<typeof meta>;
const ch = <em>Hello</em>;
export const HEADING_Default: Story = {
  args: {
    data: "heading",
    level: 1,
    children: ch,
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    children: {
      options: ["문자열"],
      control: { type: "radio" },
      mapping: {
        문자열: ch,
      },
    },
  },
};
