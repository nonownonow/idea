import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "../util/util";
import { HEADING } from "./HEADING";
import { Headline, HeadlineGroup } from "fxtsx-html/sectioning/H/Heading";

const level = 1;

const meta = {
  component: HEADING,
  tags: ["autodocs"],
  argTypes: {
    $level: {
      control: { type: "number", min: 1, max: 6 },
    },
    Headline: {
      options: ["없음", "Headline"],
      mapping: {
        없음: null,
        Headline: Headline,
      },
    },
    HeadlineGroup: {
      options: ["목업", "HeadlineGroup"],
      mapping: {
        목업: Component("$HeadlineGroup", `레벨${level} 헤딩 그룹 구현`),
        Hgroup: HeadlineGroup,
      },
    },
    children: {
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
    children: "부제목",
  },
};

export const WithFxtsxHtml: Story = {
  args: {
    ...HEADING_Default.args,
    Headline: "H" as any,
    HeadlineGroup: "Hgroup" as any,
  },
};

export const WithFxtsxHtmlAndChildren: Story = {
  args: {
    ...WithChildren.args,
    Headline: "H" as any,
    HeadlineGroup: "Hgroup" as any,
  },
};
