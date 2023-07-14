import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithoutRef, ComponentWithRef } from "../util/util";
import { HEADING } from "./HEADING";
import { $Heading, $Hgroup } from "fxtsx-html/sectioning/Heading/Heading";

const meta: Meta<typeof HEADING> = {
  component: HEADING,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;
const level = 1;
export const WithoutChildren: Story = {
  args: {
    level,
    title: "제목",
    $Heading: "목업" as any,
    $Hgroup: "목업" as any,
    children: "없음",
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    $Heading: {
      options: ["목업", "html5"],
      mapping: {
        목업: ComponentWithRef("$Heading", `레벨${level} 헤딩 구현`),
        html5: $Heading,
      },
    },
    $Hgroup: {
      options: ["목업", "html5"],
      mapping: {
        목업: ComponentWithoutRef("$Hgroup", `레벨${level} 헤딩 그룹 구현`),
        html5: $Hgroup,
      },
    },
    children: {
      control: { type: "select" },
      options: ["없음", "부제목"],
      mapping: {
        없음: null,
        부제목: <p>부제목</p>,
      },
    },
  },
};

export const WithChildren: Story = {
  args: {
    level,
    title: "제목",
    $Heading: "목업" as any,
    $Hgroup: "목업" as any,
    children: "부제목",
  },
  argTypes: WithoutChildren.argTypes,
};
