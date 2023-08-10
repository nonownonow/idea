import React from "react";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

// export type TextAreaFieldProps =

export const TextAreaField = function TextAreaField(props: any) {
  const { $key, $value, ...TextAreaField } = props;
  return (
    <ENTRY
      {...props}
      Entry={(p) => <div {...p} />}
      Key={(p) => <label htmlFor={$key} {...p} />}
      Value={(p) => <input id={$key} {...TextAreaField} value={$value} />}
    />
  );
};
