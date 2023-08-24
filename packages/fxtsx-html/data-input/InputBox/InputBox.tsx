import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import "./InputBox.css";

export type InputBoxProps = InputBox;
export type InputBox = {
  $unCheckedMark?: ReactNode;
  $checkedMark?: ReactNode;
  $type?: "checkbox" | "radio";
  $label?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
export const InputBox = Fxtsx<HTMLInputElement, InputBoxProps>(
  function InputBox(rootProps, restProps, ref) {
    const {
      $checkedMark = "[V]",
      $unCheckedMark = "[ ]",
      $type = "checkbox",
      value,
      $label = value,
      ...checkboxProps
    } = restProps;
    return (
      <label>
        {$label}
        <label data-fx-input-box={$type} {...rootProps}>
          <input type={$type} value={value} {...checkboxProps} ref={ref} />
          <span>{$unCheckedMark}</span>
          <span>{$checkedMark}</span>
        </label>
      </label>
    );
  }
);
