import type {
  ComponentPropsWithoutRef,
  FC,
  ForwardedRef,
  ReactNode,
} from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import type { RootProps } from "fxtsx/fxtsx.type";
import { Default } from "fxtsx/Identity/Default";

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
  $label?: ReactNode;
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
    $label = children,
    ...restProps
  }: RestProps<VALUEProps>,
  ref: ForwardedRef<any>
) {
  return (
    <Root ref={ref} data-fx-value {...rootProps} {...restProps}>
      {$label || $data}
    </Root>
  );
});
