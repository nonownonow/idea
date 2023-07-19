import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithoutRef } from "../util/util";
import { HEADING } from "./HEADING";
import { $Headline, $HeadlineGroup } from "fxtsx-html/sectioning/H/Heading";

const level = 1;

const meta: Meta<typeof HEADING> = {
  component: HEADING,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    $Headline: {
      options: ["없음", "Headline"],
      mapping: {
        없음: null,
        Headline: $Headline,
      },
    },
    $HeadlineGroup: {
      options: ["목업", "HeadlineGroup"],
      mapping: {
        목업: ComponentWithoutRef(
          "$HeadlineGroup",
          `레벨${level} 헤딩 그룹 구현`
        ),
        Hgroup: $HeadlineGroup,
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
};
export default meta;
type Story = StoryObj<typeof meta>;
export const WithoutChildren: Story = {
  args: {
    level: 1,
    title: "제목",
  },
};

export const WithChildren: Story = {
  args: {
    ...WithoutChildren.args,
    children: "부제목",
  },
};

export const Headline: Story = {
  args: {
    ...WithoutChildren.args,
    $Headline: "H" as any,
    $HeadlineGroup: "Hgroup" as any,
  },
};

export const HeadlineGroup: Story = {
  args: {
    ...WithChildren.args,
    $Headline: "H" as any,
    $HeadlineGroup: "Hgroup" as any,
  },
};
