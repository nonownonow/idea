import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/input/InputField/InputField";

export type TextFieldProps = InputField &
  Omit<ComponentPropsWithoutRef<"input">, "type">;
export const TextField = function TextField(props: TextFieldProps) {
  const { $key } = props;
  return (
    <InputField
      data-fx-text-field
      {...props}
      Value={"input"}
      type={"text"}
      id={$key}
    />
  );
};
