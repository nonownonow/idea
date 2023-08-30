import type {
  ComponentPropsWithoutRef,
  FC,
  ForwardedRef,
  ReactNode,
  Ref,
} from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RestProps } from "fxtsx/LIST/LIST";
import type { RootProps } from "fxtsx/fxtsx.type";
import { Default } from "fxtsx/Identity/Default";

export type VALUEProps<T> = VALUE & VALUECallback<T>;

export interface VALUE extends ComponentPropsWithoutRef<"div"> {
  $data: any;
  $label?: ReactNode;
}
export interface VALUECallback<T> {
  Root?: string | FC<{ children: ReactNode; ref: Ref<T> }>;
}
export const VALUE = Fxtsx(function VALUE<T>(
  rootProps: RootProps,
  { Root = Default, $data, $label, ...restProps }: RestProps<VALUEProps<T>>,
  ref: ForwardedRef<T>
) {
  return (
    <Root
      ref={ref}
      data-fx-value
      data-value={$data}
      {...rootProps}
      {...restProps}
    >
      {$label}
    </Root>
  );
});
