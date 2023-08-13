import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import type { ENTRYCallback } from "fxtsx/ENTRY2/ENTRY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { htmlChildren } from "fxtsx/util/util";

export type InputFieldProps = InputField & InputFieldCallback;

export type InputField = Omit<ENTRY, "$value"> & {
  $error?: string;
  $label?: string;
} & ComponentPropsWithoutRef<"input">;

export type InputFieldCallback = Pick<ENTRYCallback, "Value">;
export const InputField = function InputField(props: InputFieldProps) {
  const { $error, $label, children, ...restProps } = props;
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
      $value={null}
      {...restProps}
    />
  );
};
