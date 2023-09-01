import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";
import { Select } from "fxtsx-html/data-input/Select/Select";

export type SelectFieldProps = InputField &
  Select &
  Omit<ComponentPropsWithoutRef<"input">, "type" | "id">;
export const SelectField = function SelectField(props: SelectFieldProps) {
  const { $key } = props;
  return (
    <InputField
      data-fx-text-field
      {...props}
      Input={Select}
      type={"text"}
      id={$key}
    ></InputField>
  );
};
