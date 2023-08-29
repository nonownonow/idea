import type { FC, ForwardedRef, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import { LIST } from "fxtsx/LIST/LIST";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { Default } from "fxtsx/Identity/Default";
import { identity } from "@fxts/core";

export type DICTIONARYProps = DICTIONARY & DICTIONARYCallback;

export interface DICTIONARY extends Omit<ENTRY, "$data"> {
  /*
   * 객체 데이터
   * */
  $data: Record<string, any>;
  /*
   * 객체의 엔트리 표시 순서 및 표시 여부를 제어하는 키 배열
   * */
  $keys?: string[];
  /*
   * 키에 포멧을 적용하는 함수
   * */
  $keyFormat?: (key: string, index: number) => ReactNode;
  /*
   * 키에 개별적으로 포멧을 적용하는 함수 또는 값
   * */
  $keyFormats?: Record<string, DICTIONARY["$keyFormat"] | ReactNode>;
  /*
   * 값에 포멧을 적용하는 함수
   * */
  $valueFormat?: (value: any, key: string, index: number) => ReactNode;
  /*
   * 값에 개별적으로 포멧을 적용하는 함수 또는 값
   * */
  $valueFormats?: Record<string, DICTIONARY["$valueFormat"] | ReactNode>;
}
export interface DICTIONARYCallback {
  Dictionary?: string | FC<any>;
  Entry?: string | FC<any>;
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

export const DICTIONARY = Fxtsx(function DICTIONARY<T>(
  rootProps: RootProps,
  restProps: RestProps<DICTIONARYProps>,
  ref: ForwardedRef<T>
) {
  const {
    Dictionary = Default,
    Entry = ENTRY,
    $data,
    $keys = Object.keys($data),
    $keyFormat = identity,
    $keyFormats = {} as Record<string, any>,
    $valueFormat = identity,
    $valueFormats = {} as Record<string, any>,
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
      const keyLabel =
        key in $keyFormats
          ? typeof $keyFormats[key] === "string"
            ? $keyFormats[key]
            : $keyFormats[key](key, index)
          : $keyFormat(key, index);
      const valueLabel =
        key in $valueFormats
          ? typeof $valueFormats[key] === "string"
            ? $valueFormats[key]
            : $valueFormats[key]($data[key], key, index)
          : $valueFormat($data[key], key, index);
      return (
        <Entry
          $data={[key, $data[key]]}
          $keyLabel={keyLabel}
          $valueLabel={valueLabel}
        />
      );
    },
  });
});
