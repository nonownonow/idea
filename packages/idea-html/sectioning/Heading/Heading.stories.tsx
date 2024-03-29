import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import type { ReactNode } from "react";

const meta = {
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    $subTitle: {
      options: ["없음", "부제목", "제목과 관련된 내용"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
  render(args) {
    const { children } = args;
    let realChildren: ReactNode;
    switch (children) {
      case "없음":
        realChildren = null;
        break;
      case "부제목":
        realChildren = <p>부제목</p>;
        break;
      case "제목과 관련된 내용":
        realChildren = <p>제목과 관련된 내용</p>;
        break;
    }
    return <Heading {...args} children={realChildren} />;
  },
  args: {
    $title: "Hello <em>Heading</em>!!",
    $level: 1,
    $subTitle: "없음",
  },
};
