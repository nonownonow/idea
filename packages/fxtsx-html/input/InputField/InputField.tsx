import React from "react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { htmlChildren } from "fxtsx/util/util";

export type InputFieldProps = Omit<ENTRY, "$value"> & {
  $error?: string;
  $label?: string;
};
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
      $value={children}
      {...restProps}
    />
  );
};
