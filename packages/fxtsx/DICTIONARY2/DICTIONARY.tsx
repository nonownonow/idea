import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { ElementNames, RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import { LIST } from "fxtsx/LIST/LIST";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { Default } from "fxtsx/Identity/Default";

export type DicValue = string | number | boolean | undefined | null;
export type DicData = Record<string, DicValue>;
export type DICTIONARYProps<T, V extends DicData = {}> = DICTIONARY<V> &
  DICTIONARYCallback<T>;

export interface DICTIONARY<V extends DicData = {}>
  extends Omit<ENTRY, "$data" | "$index"> {
  $data: V;
  children?: ReactNode;
  $keys?: string[];
  $keyFormat?: (key: string, index: number) => ReactNode;
  $keyFormats?: Partial<{ [K in keyof V]: DICTIONARY["$keyFormat"] | string }>;
  $valueFormat?: (value: DicValue, key: string, index: number) => ReactNode;
  $valueFormats?: Partial<{
    [K in keyof V]: DICTIONARY["$valueFormat"] | string;
  }>;
}
export interface DICTIONARYCallback<T = any> {
  Dictionary?: ElementNames | FC<DICTIONARY & { ref?: Ref<T> }>;
  Entry?: ElementNames | FC<ENTRY>;
}
//todo: (legacy?) List를 Dictionary로 받아서 처리하도록 리팩토 그리고 Entry 재정의가 아니라, formatter 에서 Key Value 로 확장하기
//todo: Dictionary === Form?
/*
 * todo: Dictionary를 COLLECTION으로 구성
 * Item = ENTRY
 * Entry -
 *  컬렉션 구조? Collection, Item
 * 객체를 entries로 변환하여 ? 아니다. dictionary는 키를 받아서 제어한다.
 *
 * */

export const DICTIONARY = Fxtsx(function DICTIONARY<T, V extends DicData>(
  rootProps: RootProps,
  restProps: RestProps<DICTIONARYProps<T, V>>,
  ref: ForwardedRef<T>
) {
  const {
    Dictionary = Default,
    Entry = ENTRY,
    $data,
    $keys = Object.keys($data),
    ...dictionaryProps
  } = restProps;

  return createElement(LIST, {
    "data-fx-dictionary": true,
    ...rootProps,
    ...dictionaryProps,
    ref,
    $data: [...$keys.entries()],
    List: Dictionary,
    Item: ({ children: [index, key] }) => {
      return <Entry $data={[key, $data[key]]} />;
    },
  });
});
