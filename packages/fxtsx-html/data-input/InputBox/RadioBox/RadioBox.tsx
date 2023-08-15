import React, { forwardRef } from "react";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";

export type RadioBoxProps = Omit<InputBox, "$type">;
export const RadioBox = forwardRef<HTMLInputElement, RadioBoxProps>(
  (props, ref) => <InputBox $type={"radio"} {...props} ref={ref} />
);
