import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./index";
import { within } from "@storybook/testing-library";

const meta = {
  component: HEADING,
  tags: ["autodocs"],
} satisfies Meta<typeof HEADING>;
export default meta;
type Story = StoryObj<typeof meta>;
export const HEADING_Default: Story = {
  args: {
    level: 1,
    data: "heading",
    children: "Hello Heading!",
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
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
