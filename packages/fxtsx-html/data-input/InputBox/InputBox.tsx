import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import "./InputBox.css";
import type { VALUE } from "fxtsx/VALUE/VALUE";

export type InputBoxProps = InputBox;
export type InputBox = {
  $unCheckedMark?: ReactNode;
  $checkedMark?: ReactNode;
  $type?: "checkbox" | "radio";
} & Omit<ComponentPropsWithoutRef<"input">, "type"> &
  VALUE;
export const InputBox = Fxtsx<HTMLInputElement, InputBoxProps>(
  function InputBox(
    rootProps,
    {
      $data,
      $label = $data,
      $checkedMark = "[V]",
      $unCheckedMark = "[ ]",
      $type = "checkbox",
      ...restProps
    },
    ref
  ) {
    return (
      <label>
        {$label}
        <label data-fx-input-box={$type} {...rootProps}>
          <input type={$type} value={$data} {...restProps} ref={ref} />
          <span>{$unCheckedMark}</span>
          <span>{$checkedMark}</span>
        </label>
      </label>
    );
  }
);
