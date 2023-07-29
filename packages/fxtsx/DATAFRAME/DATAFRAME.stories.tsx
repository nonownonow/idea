import { DATAFRAME } from "fxtsx/DATAFRAME/DATAFRAME";
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "fxtsx/util/util";

const meta = {
  component: DATAFRAME,
  tags: ["autodocs"],
} satisfies Meta<typeof DATAFRAME>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    data: [
      { a: 1, b: 2, c: 3 },
      { a: 11, b: 22, c: 33 },
      { a: 111, b: 222, c: 333 },
    ],
    List: Component("List"),
    Element: Component("Element"),
    Dictionary: Component("Dictionary"),
    Entry: Component("Entry"),
    Key: Component("Key"),
    Value: Component("Value"),
  },
};
