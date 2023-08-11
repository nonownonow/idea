import React from "react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";

export type InputFieldProps = Omit<ENTRY, "$value"> & {
  $error?: string;
  $label?: string;
};
export const InputField = function InputField(props: InputFieldProps) {
  const { $error, $label, children: $value, ...restProps } = props;
  return (
    <ENTRY
      Entry={(p) => (
        <div {...p}>
          {p.children}
          {$error ? <div data-error>{$error}</div> : null}
        </div>
      )}
      Key={({ children: key, ...p }) => (
        <label {...p} htmlFor={key}>
          {$label || key}
        </label>
      )}
      $value={$value}
      {...restProps}
    />
  );
};
