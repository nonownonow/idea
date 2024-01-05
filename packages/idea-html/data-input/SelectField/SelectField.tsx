import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "packages/idea-html/data-input/InputField/InputField";
import { Select } from "packages/idea-html/data-input/Select/Select";
import type { DicData } from "packages/idea/fxtsx.type";

export type SelectFieldProps<Dic extends DicData> = Omit<InputField, "$input"> &
  Omit<Select<Dic>, "$data"> &
  Omit<ComponentPropsWithoutRef<"input">, "type">;
export const SelectField = function SelectField<Dic extends DicData>(
  props: SelectFieldProps<Dic>
) {
  return (
    <InputField data-fx-text-field {...props} $input={Select}></InputField>
  );
};
