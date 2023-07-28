import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import { Identity } from "fxtsx/Identity/Identity";
import { identity } from "@fxts/core";

export type LISTProps<T, Value> = LIST<Value> & LISTCallback<T, Value>;
export interface LIST<Value> {
  /**
   * 배열..
   */
  data: Value[];
  /**
   * 배열의 각 요소를 포멧팅 하는 함수
   */
  formatter?: (value: Value, index: number) => any;
  /**
   * 리스트 내부에 들어가는 요소.
   */
  children?: ReactNode;
}
export interface LISTCallback<T, Value> {
  /**
   * 리스트를 구현하는 컨포넌트
   */
  List?: FC<{ children: ReactNode; ref: Ref<T> }>;
  /**
   * 엔트리를 구현하는 컨포넌트
   */
  Entry?: FC<{ children: ReactNode; value: Value; index: number }>;
}
//todo: uuid 이용해서 키 생성하여 리스트에 적용하기,

export type RestProps<P> = Omit<P, keyof RootProps>;
export const LIST = Fxtsx(function LIST<T, Value>(
  rootProps: RootProps,
  restProps: RestProps<LISTProps<T, Value>>,
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
