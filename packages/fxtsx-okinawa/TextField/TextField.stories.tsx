import type { Meta } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;
export default meta;

export { Default } from "fxtsx-html/input/TextField/TextField.stories";
