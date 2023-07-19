import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithoutRef } from "../util/util";
import { HEADING } from "./HEADING";
import { $H, $Hgroup } from "fxtsx-html/sectioning/H/H";

const level = 1;

const meta: Meta<typeof HEADING> = {
  component: HEADING,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    $H: {
      options: ["없음", "H"],
      mapping: {
        없음: null,
        H: $H,
      },
    },
    $Hgroup: {
      options: ["목업", "Hgroup"],
      mapping: {
        목업: ComponentWithoutRef("$Hgroup", `레벨${level} 헤딩 그룹 구현`),
        Hgroup: $Hgroup,
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

export const H: Story = {
  args: {
    ...WithoutChildren.args,
    $H: "H" as any,
    $Hgroup: "Hgroup" as any,
  },
};

export const Hgroup: Story = {
  args: {
    ...WithChildren.args,
    $H: "H" as any,
    $Hgroup: "Hgroup" as any,
  },
};
