import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";
import { Select } from "fxtsx-html/data-input/Select/Select";
import type { DicData } from "fxtsx/fxtsx.type";

export type SelectFieldProps<Dic extends DicData> = Omit<InputField, "$input"> &
  Select<Dic> &
  Omit<ComponentPropsWithoutRef<"input">, "type">;
export const SelectField = function SelectField<Dic extends DicData>(
  props: SelectFieldProps<Dic>
) {
  return (
    <InputField data-fx-text-field {...props} $input={Select}></InputField>
  );
};
