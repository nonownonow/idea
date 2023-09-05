import type { Meta, StoryObj } from "@storybook/react";
import { HEADING } from "./HEADING";
import { P } from "fxtsx-html/Value/P/P";

const meta = {
  component: HEADING,
  tags: ["autodocs"],
  argTypes: {
    $level: {
      control: { type: "number", min: 1, max: 6 },
    },
    $subTitle: {
      options: ["없음", "부제목"],
      mapping: {
        없음: null,
        부제목: <p>부제목</p>,
      },
    },
  },
} satisfies Meta<typeof HEADING>;
export default meta;
type Story = StoryObj<typeof meta>;
export const HEADING_Default: Story = {
  args: {
    $level: 1,
    $title: "제목",
  },
};

export const WithChildren: Story = {
  args: {
    ...HEADING_Default.args,
    $subTitle: <P>"부제목"</P>,
  },
};

export const WithFxtsxHtml: Story = {
  args: {
    ...HEADING_Default.args,
    Root: "h1",
    HeadingGroup: "hgroup",
  },
};

export const WithFxtsxHtmlAndChildren: Story = {
  args: {
    ...WithChildren.args,
    Root: "h1",
    HeadingGroup: "hgroup",
  },
};
