import type { FC, ReactNode } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { ComponentWithoutRef } from "fxtsx/util/util";
import type { RootElementProps } from "fxtsx/fxtsx.type";

export type LISTProps<T> = LIST<T> & LISTCallback;
export interface LIST<T> {
  data: T[];
  children: ReactNode;
}
export interface LISTCallback {
  List?: FC;
  Item?: FC;
}

export const MockList = ComponentWithoutRef("List");
export type RestProps<P> = Omit<P, keyof RootElementProps>;
export const LIST = Fxtsx(function LIST<T>(
  rootProps: RootElementProps,
  restProps: RestProps<LISTProps<T>>
) {
  const { List = MockList, ...listProps } = restProps;
  return <List data-fx-list {...rootProps} {...listProps} />;
});
