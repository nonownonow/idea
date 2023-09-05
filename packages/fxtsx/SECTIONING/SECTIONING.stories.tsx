import type { Meta, StoryObj } from "@storybook/react";
import { SECTIONING } from "./SECTIONING";
import { Component } from "fxtsx/util/util";

import { Heading } from "fxtsx-html/sectioning/Heading/Heading";
import { Sectioning } from "fxtsx-html/sectioning/Section/Section";
import { HEADING_Default } from "fxtsx/HEADING/HEADING.stories";

const meta = {
  component: SECTIONING,
  tags: ["autodocs"],
} satisfies Meta<typeof SECTIONING>;

type Story = StoryObj<typeof meta>;
export default meta;

const level = 1;

export const SECIONING_Default: Story = {
  args: {
    ...HEADING_Default.args,
    $lowerContents: "하위 컨텐츠",
    $contents: "컨텐츠",
  },
};
export const Default: Story = {
  args: {
    Root: "목업" as any,
    Heading: "목업" as any,
    $level: level,
    $title: "제목",
    children: `레벨${level}의 하위 레벨 내용`,
    $lowerContents: "wow",
    $contents: "없음",
  },
  argTypes: {
    Root: {
      options: ["목업", "Section"],
      mapping: {
        목업: Component("$Sectioning", `레벨${level} 섹션 구현`),
        Section: Sectioning,
      },
    },
    Heading: {
      options: ["목업", "Heading"],
      mapping: {
        목업: Component("$Heading", `레벨${level} 헤딩 구현`),
        Heading: Heading,
      },
    },
    $contents: {
      options: ["없음", "html"],
      mapping: {
        없음: null,
        html: (
          <p>
            <em>현재 레벨</em> 설명
          </p>
        ),
      },
    },
  },
};
