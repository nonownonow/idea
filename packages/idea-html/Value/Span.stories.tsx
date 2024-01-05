import type { Meta, StoryObj } from "@storybook/react";
import { Span } from "packages/idea-html/Value/index";
import { Default as ValueDefault } from "packages/idea/VALUE/VALUE.stories";

const meta = {
  component: Span,
  tags: ["autodocs"],
} satisfies Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ValueDefault.args,
};
