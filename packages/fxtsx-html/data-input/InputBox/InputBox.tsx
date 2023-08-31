import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import "./InputBox.css";

export type InputBoxProps = InputBox &
  Omit<ComponentPropsWithoutRef<"input">, "type">;
export type InputBox = {
  $unCheckedMark?: ReactNode;
  $checkedMark?: ReactNode;
  $type?: "checkbox" | "radio";
};
export const InputBox = Fxtsx<HTMLInputElement, InputBoxProps>(
  function InputBox(
    rootProps,
    {
      $checkedMark = "[V]",
      $unCheckedMark = "[ ]",
      $type = "checkbox",
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <label data-fx-input-box={$type} {...rootProps}>
        <input type={$type} {...restProps} ref={ref} />
        <span>{$unCheckedMark}</span>
        <span>{$checkedMark}</span>
      </label>
    );
  }
);
