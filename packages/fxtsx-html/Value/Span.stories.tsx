import type { Meta, StoryObj } from "@storybook/react";
import { Span } from "fxtsx-html/Value/index";
import { Default as ValueDefault } from "fxtsx/VALUE/VALUE.stories";

const meta = {
  component: Span,
  tags: ["autodocs"],
} satisfies Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ValueDefault.args,
};
