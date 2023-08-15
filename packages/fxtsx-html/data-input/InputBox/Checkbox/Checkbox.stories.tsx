import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "fxtsx-html/data-input/InputBox/Checkbox/Checkbox";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    $unCheckedMark: <span data-testid={"unCheckedMark"}>🙂</span>,
    $checkedMark: <span data-testid={"checkedMark"}>😆</span>,
  },
  play: async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const checkedMark = getByTestId("checkedMark");
    const unCheckedMark = getByTestId("unCheckedMark");
    expect(checkedMark).not.toBeVisible();
    expect(unCheckedMark).toBeVisible();
    await userEvent.click(unCheckedMark);
    expect(checkedMark).toBeVisible();
    expect(unCheckedMark).not.toBeVisible();
    await userEvent.click(checkedMark);
    expect(checkedMark).not.toBeVisible();
    await expect(unCheckedMark).toBeVisible();
  },
};
