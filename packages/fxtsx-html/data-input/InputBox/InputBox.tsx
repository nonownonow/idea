import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import "./InputBox.css";

export type InputBoxProps = InputBox;
export type InputBox = {
  $unCheckedMark: ReactNode;
  $checkedMark: ReactNode;
  $type: "checkbox" | "radio";
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
export const InputBox = Fxtsx<HTMLInputElement, InputBoxProps>(
  function InputBox(rootProps, restProps, ref) {
    const {
      $checkedMark,
      $unCheckedMark,
      $type = "checkbox",
      ...checkboxProps
    } = restProps;
    return (
      <label data-fx-input-box={$type} {...rootProps}>
        <input type={$type} {...checkboxProps} ref={ref} />
        <span>{$unCheckedMark}</span>
        <span>{$checkedMark}</span>
      </label>
    );
  }
);
