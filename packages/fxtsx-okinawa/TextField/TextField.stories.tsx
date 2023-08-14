import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
  component: (props) => <TextField data-fx={"okiwana"} {...props} />,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;
export default meta;

export { Default } from "fxtsx-html/input/TextField/TextField.stories";
