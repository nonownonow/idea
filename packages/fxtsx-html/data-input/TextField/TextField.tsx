import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";

export type TextFieldProps = InputField &
  Omit<ComponentPropsWithoutRef<"input">, "type" | "id"> & {
    type?: "url" | "tel" | "email";
  };
export const TextField = function TextField(props: TextFieldProps) {
  const { $key, type = "text" } = props;
  return (
    <InputField
      data-fx-text-field
      {...props}
      Input={"input"}
      id={$key}
      type={type}
    ></InputField>
  );
};
