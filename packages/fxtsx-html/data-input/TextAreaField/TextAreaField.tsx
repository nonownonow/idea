import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";

// export type TextAreaFieldProps =
export type TextAreaFieldProps = InputField &
  Omit<ComponentPropsWithoutRef<"textarea">, "id">;
export const TextAreaField = function TextAreaField(props: TextAreaFieldProps) {
  const { $key } = props;
  return <InputField {...props} Input={"textarea"} id={$key} />;
};
