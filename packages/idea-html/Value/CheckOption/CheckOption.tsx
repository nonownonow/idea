import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";
import { InputBox } from "packages/idea-html/data-input/InputBox/InputBox";
import { Fxtsx } from "packages/idea/FxTsx/FxTsx";
import { htmlChildren } from "packages/idea/util/util";
import "./CheckOption.css";

export type CheckOptionProps = VALUE & ComponentPropsWithoutRef<"input">;

export const CheckOption = Fxtsx<HTMLInputElement, CheckOptionProps>(
  (
    rootProps,
    { $data, children, $valueLabel = children, value, ...restProps },
    ref
  ) => (
    <VALUE
      data-fx-check-option
      Root={"label"}
      {...rootProps}
      $valueLabel={
        <>
          <span {...htmlChildren($valueLabel)} />
          <InputBox value={$data} {...restProps} ref={ref} />
        </>
      }
    />
  )
);
