import { DATAFRAME } from "fxtsx/DATAFRAME/DATAFRAME";
import type { Meta, StoryObj } from "@storybook/react";
import type { DicData } from "fxtsx/fxtsx.type";

const meta = {
  component: DATAFRAME,
  tags: ["autodocs"],
} satisfies Meta<typeof DATAFRAME>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    $data: [
      { a: 1, b: 2, c: 3 },
      { a: 11, b: 22, c: 33 },
      { a: 111, b: 222, c: 333 },
    ],
  },
};

export const Formatting: Story = {
  args: {
    $data: [
      { a: 1, b: 2 },
      { a: 11, b: 22 },
    ] as DicData[],
    $itemFormat: (Dictionary: any) => (
      <a href="http://naver.com" data-testid={"anchor"}>
        {Dictionary}
      </a>
    ),
    $keyFormat: (key: any) => `${key} 꾸미기`,
    $keyFormats: {
      b: "b키 입니다",
    },
    $valueFormat: (value: any) => `꾸며진 ${value}`,
    $valueFormats: {
      b: (value: any) => `꾸며진 b값 ${value}`,
    },
  },
};
