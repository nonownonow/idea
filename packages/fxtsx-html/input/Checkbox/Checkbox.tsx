import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import "./Checkbox.css";

export type CheckboxProps = {
  unCheckedMark: ReactNode;
  checkedMark: ReactNode;
} & ComponentPropsWithoutRef<"input">;
export const Checkbox = Fxtsx<HTMLInputElement, CheckboxProps>(
  function Checkbox(rootProps, restProps, ref) {
    const { checkedMark, unCheckedMark, ...checkboxProps } = restProps;
    return (
      <label data-fx-checkbox {...rootProps}>
        <input type={"checkbox"} {...checkboxProps} ref={ref} />
        <span>{unCheckedMark}</span>
        <span>{checkedMark}</span>
      </label>
    );
  }
);
