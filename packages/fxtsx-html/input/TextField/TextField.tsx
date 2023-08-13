import React from "react";
import type { InputFieldProps } from "fxtsx-html/input/InputField/InputField";
import { InputField } from "fxtsx-html/input/InputField/InputField";

export const TextField = function TextField(props: InputFieldProps) {
  return (
    <InputField data-fx-text-field {...props}>
      <input type={"text"} id={props.$key} />
    </InputField>
  );
};
