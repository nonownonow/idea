import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./HEADING";
import { within } from "@storybook/testing-library";
import { MockComponent } from "../util";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const HEADING = await canvas.getByText("Hello Heading!");
    expect(HEADING).toHaveAttribute("data-heading", "true");
    expect(HEADING).toHaveAttribute("data", "heading");
    expect(HEADING).toHaveAttribute("level", "1");
    expect(HEADING).toHaveTextContent("Hello Heading!");
  },
};
