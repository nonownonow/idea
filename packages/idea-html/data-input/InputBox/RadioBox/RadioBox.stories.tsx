import type { Meta, StoryObj } from "@storybook/react";
import { RadioBox } from "packages/idea-html/data-input/InputBox/RadioBox/RadioBox";
import { Default as DefaultStory } from "packages/idea-html/data-input/InputBox/Checkbox/Checkbox.stories";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  component: RadioBox,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: DefaultStory.args,
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
    expect(checkedMark).toBeVisible();
    expect(unCheckedMark).not.toBeVisible();
  },
};
