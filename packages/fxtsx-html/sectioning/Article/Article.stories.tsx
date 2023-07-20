import type { Meta, StoryObj } from "@storybook/react";
import { Article } from "./Article";

const meta = {
  component: Article,
  tags: ["autodocs"],
} satisfies Meta<typeof Article>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $level: 1,
    $title: "아티클 제목",
    $subTitle: "아티클 서브 타이틀",
    $contents: "현재 섹션 레벨의 내용",
    children: "하위 섹션 레벨의 내용", // @ts-ignore
  },
  argTypes: {
    $level: {
      control: { type: "number", min: 1, max: 6 },
    },
  },
};
