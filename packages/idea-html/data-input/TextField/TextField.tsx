import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "packages/idea-html/data-input/InputField/InputField";

export type TextFieldProps = Omit<InputField, "$input"> &
  ComponentPropsWithoutRef<"input">;
export const TextField = function TextField(props: TextFieldProps) {
  return (
    <InputField
      data-fx-text-field
      {...props}
      type={"text"}
      $input={"input"}
    ></InputField>
  );
};
