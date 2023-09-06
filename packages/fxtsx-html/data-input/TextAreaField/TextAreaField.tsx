import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";

export type TextAreaFieldProps = Omit<InputField, "$input"> &
  ComponentPropsWithoutRef<"textarea">;

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>((props, ref) => <InputField {...props} $input={"textarea"} ref={ref} />);
