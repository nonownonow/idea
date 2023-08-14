import type { ComponentPropsWithoutRef, FC } from "react";
import React from "react";
import type { ElementNames } from "fxtsx/ENTRY2/ENTRY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { htmlChildren } from "fxtsx/util/util";

export type InputFieldProps = InputField & InputFieldCallback;

export type InputField = Omit<ENTRY, "$value"> & {
  $error?: string;
  $label?: string;
} & ComponentPropsWithoutRef<"input">;

export type InputFieldCallback = {
  Input: ElementNames | FC<any>;
};
export const InputField = function InputField(props: InputFieldProps) {
  const { Input, $error, $label, children, ...restProps } = props;
  return (
    <ENTRY
      Entry={(entryProps) => (
        <div {...entryProps}>
          {entryProps.children}
          {$error ? <div data-error>{$error}</div> : null}
        </div>
      )}
      Key={({ children: key, ...p }) => (
        <label {...p} htmlFor={key} {...htmlChildren($label || key)} />
      )}
      Value={Input}
      $value={null}
      {...restProps}
    />
  );
};
