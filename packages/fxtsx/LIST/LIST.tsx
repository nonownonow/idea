import type { FC, ForwardedRef, Key, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import { identity } from "@fxts/core";
import { Identity } from "fxtsx/Identity/Identity";

export type LISTProps<T extends Key> = LIST<T> & LISTCallback;
export interface LIST<T extends Key> {
  data: T[];
  formatter?: (dataElement: T, index: number) => ReactNode;
  children?: ReactNode;
}
export interface LISTCallback {
  List?: FC<{ children: ReactNode; ref: Ref<HTMLUListElement> }>;
  Entry?: FC<{ children: ReactNode }>;
}

export type RestProps<P> = Omit<P, keyof RootProps>;
export const LIST = Fxtsx(function LIST<T extends Key>(
  rootProps: RootProps,
  restProps: RestProps<LISTProps<T>>,
  ref: ForwardedRef<HTMLUListElement>
) {
  const {
    List = Identity,
    Entry = Identity,
    data = [],
    children,
    formatter = identity,
    ...listProps
  } = restProps;
  return (
    <List data-fx-list {...rootProps} {...listProps} ref={ref}>
      {data.map((a, i) => (
        <Entry key={a}>{formatter(a, i)}</Entry>
      ))}
      {children}
    </List>
  );
});
