import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";

export type TextFieldProps = InputField &
  Omit<ComponentPropsWithoutRef<"input">, "type" | "id">;
export const TextField = function TextField(props: TextFieldProps) {
  const { $key } = props;
  return (
    <InputField
      data-fx-text-field
      {...props}
      Input={"input"}
      type={"text"}
      id={$key}
    ></InputField>
  );
};

export const EmailField = (props: TextFieldProps) => (
  <InputField
    data-fx-email-field
    {...props}
    Input={"input"}
    type={"email"}
    id={props.$key}
  ></InputField>
);

export const TelField = (props: TextFieldProps) => (
  <InputField
    data-fx-tel-field
    {...props}
    Input={"input"}
    type={"tel"}
    id={props.$key}
  ></InputField>
);
