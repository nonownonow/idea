import type { Meta, StoryObj } from "@storybook/react";
import { SECTIONING } from "./SECTIONING";
import { ComponentWithRef } from "fxtsx/util/util";

import { H } from "fxtsx-html/sectioning/H/H";
import { $Section } from "fxtsx-html/sectioning/Section/Section";

const meta: Meta<typeof SECTIONING> = {
  component: SECTIONING,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export default meta;

const level = 1;
export const Default: Story = {
  args: {
    $Section: "목업" as any,
    $Heading: "목업" as any,
    level: level,
    title: "제목",
    children: `레벨${level}의 하위 레벨 내용`,
    lowerContents: "wow",
    contents: "없음",
  },
  argTypes: {
    $Section: {
      options: ["목업", "Section"],
      mapping: {
        목업: ComponentWithRef("$Section", `레벨${level} 섹션 구현`),
        Section: $Section,
      },
    },
    $Heading: {
      options: ["목업", "H"],
      mapping: {
        목업: ComponentWithRef("$Heading", `레벨${level} 헤딩 구현`),
        H,
      },
    },
    contents: {
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
