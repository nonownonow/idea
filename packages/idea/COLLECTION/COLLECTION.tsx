import type { FC, ForwardedRef, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "packages/idea/FxTsx/FxTsx";
import type { Dataset, RootProps } from "packages/idea/fxtsx.type";
import { Default } from "packages/idea/Identity/Default";
import { identity } from "@fxts/core";

export type COLLECTIONProps<Value> = COLLECTION<Value> & COLLECTIONCallback;

export interface COLLECTION<Value = unknown> extends Dataset {
  /**
   * 배열
   */
  $data: Value[];
  /**
   * 배열의 각 요소를 포멧팅 하는 함수
   */
  $itemFormat?: (value: Value, index: number) => any;
  /**
   * 리스트 내부에 들어가는 요소.
   */
  children?: ReactNode;
}
export interface COLLECTIONCallback {
  /**
   * 리스트를 구현하는 컨포넌트
   */
  Root?: string | FC<any>;
  /**
   * 엔트리를 구현하는 컨포넌트
   */
  Item?: string | FC<any>;
}
//todo: uuid 이용해서 키 생성하여 리스트에 적용하기,
//todo: List-> Collection 으로 변경
// ENTRY->ITEM 으로 변경 && Item =Item
// List => List,
// Identity => (p)=><>p.children</>
/*
 * 컬렉션 구조? Collection, Item
 * 컬렉션구조면, 배열, 객체 모두 entris 구조로 변환가능하다. 어쨌든 data는 배열이다.
 * Noop => p=>null
 * */

export type RestProps<P> = Omit<P, keyof RootProps>;
export const COLLECTION = Fxtsx(function COLLECTION<T, Value>(
  rootProps: RootProps,
  restProps: RestProps<COLLECTIONProps<Value>>,
  ref: ForwardedRef<T>
) {
  const {
    Root = Default,
    Item = Default,
    $data = [],
    $itemFormat = identity,
    ...listProps
  } = restProps;
  return createElement(
    Root,
    {
      "data-fx-list": true,
      ...rootProps,
      ...listProps,
      ref,
    },
    // $data.map((a, i) => createElement(Item, { key: i }, $itemFormat(a, i)))
    $data.map((a, i) => <Item key={i}>{$itemFormat(a, i)}</Item>)
  );
});
