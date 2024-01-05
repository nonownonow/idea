import type {
  ComponentPropsWithoutRef,
  FC,
  ForwardedRef,
  ReactNode,
} from "react";
import React from "react";
import { Fxtsx } from "packages/idea/FxTsx/FxTsx";
import type { RestProps, RootProps } from "packages/idea/fxtsx.type";
import { Default } from "packages/idea/Identity/Default";
import { htmlChildren } from "packages/idea/util/util";

export type VALUEProps = VALUE &
  VALUECallback &
  (
    | ComponentPropsWithoutRef<"div">
    | ComponentPropsWithoutRef<"option">
    | ComponentPropsWithoutRef<"a">
    | ComponentPropsWithoutRef<"button">
  );

export type VALUE = {
  $data?: any;
  $valueLabel?: ReactNode;
};
export interface VALUECallback {
  Root?: string | FC<any>;
}
export const VALUE = Fxtsx(function VALUE(
  rootProps: RootProps,
  {
    Root = Default,
    $data,
    children,
    $valueLabel = children,
    ...restProps
  }: RestProps<VALUEProps>,
  ref: ForwardedRef<any>
) {
  return (
    <Root
      ref={ref}
      data-fx-value
      {...rootProps}
      {...restProps}
      {...htmlChildren($valueLabel || $data)}
    />
  );
});
