import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithRef } from "../util/util";
import { SECTIONING } from "./SECTIONING";

const meta: Meta<typeof SECTIONING> = {
  component: SECTIONING,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;
export default meta;

const level = 1;
export const Default: Story = {
  args: {
    $Section: ComponentWithRef("$Section", `레벨${level} 섹션 구현`),
    $Heading: ComponentWithRef("$Heading", `레벨${level} 해딩 구현`),
    level: level,
    title: "제목",
    children: `레벨${level}의 하위 레벨 내용`,
  },
};
