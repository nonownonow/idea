import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: DICTIONARY,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DICTIONARY>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      keyA: "ValueA",
      keyB: "ValueB",
      keyC: "ValueC",
      keyD: "ValueD",
      keyE: "ValueE",
    },
    keys: ["keyA", "keyD", "keyB", "keyA", "keyD", "keyE"],
    keyFormat: (key, index) => {
      return index !== 0 ? (
        <>
          *<em>{key}</em>*
        </>
      ) : (
        key
      );
    },
    keyFormats: {
      keyB: "키B",
      keyD: (key, index) => (index > 2 ? <>{key}!!</> : key),
    },
    valueFormat: (value, key, index) => (index > 0 ? `값: ${value}` : value),
    valueFormats: {
      keyB: (value, key, index) => (
        <em>
          {index}번째 {value}
        </em>
      ),
    },
  },
};
