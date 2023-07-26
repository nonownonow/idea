import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import { Identity } from "fxtsx/Identity/Identity";
import { identity } from "@fxts/core";

export type LISTProps<T, V> = LIST<V> & LISTCallback<T, V>;
export interface LIST<V> {
  data: V[];
  formatter?: (value: V, index: number) => any;
  children?: ReactNode;
}
export interface LISTCallback<T, V> {
  List?: FC<{ children: ReactNode; ref: Ref<T> }>;
  Entry?: FC<{ children: ReactNode; value: V; index: number }>;
}

export type RestProps<P> = Omit<P, keyof RootProps>;
export const LIST = Fxtsx(function LIST<T, V>(
  rootProps: RootProps,
  restProps: RestProps<LISTProps<T, V>>,
  ref: ForwardedRef<T>
) {
  const {
    List = Identity,
    Entry = Identity,
    data = [],
    children,
    formatter = identity,
    ...listProps
  } = restProps;
  //todo: uuid 이용해서 키 생성하여 리스트에 적용하기
  return (
    <List data-fx-list {...rootProps} {...listProps} ref={ref}>
      {data.map((a, i) => (
        <Entry key={i} value={a} index={i}>
          {formatter(a, i)}
        </Entry>
      ))}
      {children}
    </List>
  );
});
