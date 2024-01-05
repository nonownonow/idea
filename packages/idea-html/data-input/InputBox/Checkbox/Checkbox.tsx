import React, { forwardRef } from "react";
import type { InputBoxProps } from "packages/idea-html/data-input/InputBox/InputBox";
import { InputBox } from "packages/idea-html/data-input/InputBox/InputBox";

export type CheckBoxProps = Omit<InputBoxProps, "$type">;
export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => <InputBox $type={"checkbox"} {...props} ref={ref} />
);
