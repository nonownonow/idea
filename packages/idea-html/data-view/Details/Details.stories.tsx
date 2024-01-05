import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Details } from "packages/idea-html/data-view/Details/Details";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  component: Details,
  tags: ["autodocs"],
} satisfies Meta<typeof Details>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    children: <div>Contents</div>,
    $summary: "Summary",
    $openMark: "[열기]",
    $closeMark: "[닫기]",
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    const summary = screen.getByText("Summary");
    const openMark = screen.getByText("[열기]");
    const closeMark = screen.getByText("[닫기]");
    await userEvent.click(summary);

    expect(openMark).not.toBeVisible();
    await expect(closeMark).toBeVisible();
    await userEvent.click(summary);
    expect(closeMark).not.toBeVisible();
    await expect(openMark).toBeVisible();
  },
};
