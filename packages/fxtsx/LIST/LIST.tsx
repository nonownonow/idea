import type { FC, ForwardedRef, Key, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { ComponentWithoutRef, ComponentWithRef } from "fxtsx/util/util";
import type { RootElementProps } from "fxtsx/fxtsx.type";

export type LISTProps<T extends Key> = LIST<T> & LISTCallback;
export interface LIST<T extends Key> {
  data: T[];
  formatter: (dataElement: T, index: number) => ReactNode;
  children: ReactNode;
}
export interface LISTCallback {
  List?: FC<{ children: ReactNode; ref: Ref<HTMLUListElement> }>;
  Item?: FC<{ children: ReactNode }>;
}

export const MockList = ComponentWithRef("List");
export const MockItem = ComponentWithoutRef("List");
export type RestProps<P> = Omit<P, keyof RootElementProps>;
export const LIST = Fxtsx(function LIST<T extends Key>(
  rootProps: RootElementProps,
  restProps: RestProps<LISTProps<T>>,
  ref: ForwardedRef<HTMLUListElement>
) {
  const {
    List = MockList,
    Item = MockItem,
    data,
    children,
    formatter,
    ...listProps
  } = restProps;
  return (
    <List data-fx-list {...rootProps} {...listProps} ref={ref}>
      {data.map((a, i) => (
        <Item key={a}>{formatter(a, i)}</Item>
      ))}
      {children}
    </List>
  );
});
