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
export const HEADING_Default: Story = {
  args: {
    level: 1,
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
  },
};
