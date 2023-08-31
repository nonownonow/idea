import type {
  ComponentPropsWithoutRef,
  FC,
  ForwardedRef,
  ReactNode,
  Ref,
} from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import type { RootProps } from "fxtsx/fxtsx.type";
import { Default } from "fxtsx/Identity/Default";

export type VALUEProps<T> = VALUE & VALUECallback<T>;

export type VALUE =
  | (
      | ComponentPropsWithoutRef<"div">
      | ComponentPropsWithoutRef<"option">
      | ComponentPropsWithoutRef<"a">
    ) & {
      $data?: any;
      $label?: ReactNode;
    };
export interface VALUECallback<T> {
  Root?: string | FC<{ children: ReactNode; ref: Ref<T> }>;
}
export const VALUE = Fxtsx(function VALUE<T = unknown>(
  rootProps: RootProps,
  {
    Root = Default,
    $data,
    children,
    $label = children,
    ...restProps
  }: RestProps<VALUEProps<T>>,
  ref: ForwardedRef<T>
) {
  return (
    <Root ref={ref} data-fx-value {...rootProps} {...restProps}>
      {$label || $data}
    </Root>
  );
});
