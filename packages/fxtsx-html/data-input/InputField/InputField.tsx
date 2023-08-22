import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import React from "react";
import type { ElementNames } from "fxtsx/ENTRY/ENTRY";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { htmlChildren } from "fxtsx/util/util";

export type InputFieldProps = InputField & InputFieldCallback;

export type InputField<Input = ComponentPropsWithoutRef<"input">> = Omit<
  ENTRY,
  "$value"
> & {
  $error?: string;
  $label?: ReactNode;
} & Input;

export type InputFieldCallback = {
  Input: ElementNames | FC<any>;
};
export const InputField = function InputField(props: InputFieldProps) {
  const { Input, $error, $label, $key, id = $key, ...restProps } = props;
  return (
    <ENTRY
      data-fx-input-field
      Entry={(entryProps) => (
        <div {...entryProps}>
          {entryProps.children}
          {$error ? <div data-error>{$error}</div> : null}
        </div>
      )}
      Key={({ children: key, ...p }) => (
        <label
          data-fx-label
          {...p}
          htmlFor={key}
          {...htmlChildren($label || key)}
        />
      )}
      Value={Input}
      $value={null}
      $key={$key}
      id={id}
      {...restProps}
    />
  );
};
