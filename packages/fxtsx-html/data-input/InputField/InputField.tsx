import type { ChangeEvent, FC, ReactNode } from "react";
import React, { forwardRef } from "react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { htmlChildren } from "fxtsx/util/util";

export type InputField =
  | Omit<ENTRY, "$data"> & {
      $error?: string;
      $label?: ReactNode;
      $input: string | FC<any>;
      id: string;
      type?: string;
      children?: ReactNode;
      onChange: (e: ChangeEvent<unknown>) => void;
    };

export const InputField = forwardRef((props: InputField, ref) => {
  const { $error, $label, $input, id, ...restProps } = props;
  return (
    <ENTRY
      data-fx-input-field
      ref={ref}
      Root={(entryProps) => (
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
      Value={({ children: Input, ...p }) => <Input id={id} name={id} {...p} />}
      $data={[id, $input]}
      {...restProps}
    />
  );
});
