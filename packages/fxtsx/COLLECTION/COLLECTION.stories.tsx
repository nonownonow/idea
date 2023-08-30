import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: COLLECTION,
  tags: ["autodocs"],
  argTypes: {
    $data: {
      options: ["없음", "배열1"],
      mapping: {
        없음: undefined,
        배열1: [1, 2, 3, 4, 5, 6, 7],
      },
    },
    $itemFormat: {
      control: { type: "select" },
      options: ["없음", "포맷터1"],
      mapping: {
        없음: undefined,
        포맷터1: (a: any, i: any) => {
          return i !== 0 ? `${a} EA` : a;
        },
      },
    },
  },
} satisfies Meta<typeof COLLECTION>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutFormatter: Story = {
  args: {
    $data: "배열1" as any,
  },
};

export const WithFormatter: Story = {
  args: {
    $data: [1, 2, 3, 4, 5, 6, 7],
    $itemFormat: "포맷터1" as any,
  },
};
