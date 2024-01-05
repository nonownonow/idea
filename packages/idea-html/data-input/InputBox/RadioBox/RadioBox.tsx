import React, { forwardRef } from "react";
import type { InputBoxProps } from "packages/idea-html/data-input/InputBox/InputBox";
import { InputBox } from "packages/idea-html/data-input/InputBox/InputBox";

export type RadioBoxProps = Omit<InputBoxProps, "$type">;
export const RadioBox = forwardRef<HTMLInputElement, RadioBoxProps>(
  (props, ref) => <InputBox $type={"radio"} {...props} ref={ref} />
);
