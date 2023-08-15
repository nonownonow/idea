import React, { forwardRef } from "react";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";

export type CheckBoxProps = Omit<InputBox, "$type">;
export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => <InputBox $type={"checkbox"} {...props} ref={ref} />
);
