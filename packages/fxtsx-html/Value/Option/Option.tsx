import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type OptionProps = ComponentPropsWithoutRef<"option"> & VALUE;
export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  (props, ref) => (
    <VALUE
      data-fx-option
      ref={ref}
      {...props}
      Root={"option"}
      value={props.$data}
    />
  )
);
