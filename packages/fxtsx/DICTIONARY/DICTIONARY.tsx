import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { identity } from "@fxts/core";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

export type DicValue = string | number | boolean | undefined | null;
export type DicData = Record<string, DicValue>;
export type DICTIONARYProps<T, V extends DicData = {}> = DICTIONARY<V> &
  DICTIONARYCallback<T>;

export interface DICTIONARY<V extends DicData = {}> {
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
  Root?: FC<COLLECTION<string> & { ref?: Ref<T> }>;
  Entry?: FC<ENTRY>;
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
    Root = COLLECTION,
    Entry = ENTRY,
    $data,
    $keys = Object.keys($data),
    $keyFormat = identity,
    $keyFormats = {} as { [K in keyof V]: any },
    $valueFormat = identity,
    $valueFormats = {} as { [K in keyof V]: any },
    ...dictionaryProps
  } = restProps;

  return createElement(Root, {
    "data-fx-dictionary": true,
    ...rootProps,
    ...dictionaryProps,
    ref,
    $data: $keys,
    $itemFormat: (key, index) =>
      createElement(Entry, {
        $key:
          key in $keyFormats
            ? typeof $keyFormats[key] === "string"
              ? $keyFormats[key]
              : $keyFormats[key](key, index)
            : $keyFormat(key, index),
        $value:
          key in $valueFormats
            ? typeof $valueFormats[key] === "string"
              ? $valueFormats[key]
              : $valueFormats[key]($data[key], key, index)
            : $valueFormat($data[key], key, index),
        name: key,
        value: $data[key] as string,
      }),
  });
});
