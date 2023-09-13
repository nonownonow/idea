import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { htmlChildren } from "fxtsx/util/util";

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
