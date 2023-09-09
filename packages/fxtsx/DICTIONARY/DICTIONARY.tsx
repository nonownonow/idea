import type { FC, ForwardedRef, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { DicData, RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { identity } from "@fxts/core";
import { Default } from "fxtsx/Identity/Default";

export type DICTIONARYProps<Dic extends DicData> = DICTIONARY<Dic> &
  DICTIONARYCallback;

export interface DICTIONARY<Dic extends DicData> extends Omit<ENTRY, "$data"> {
  /**
   * 객체 데이터
   */
  $data: Dic;
  /**
   * 객체의 엔트리 표시 순서 및 표시 여부를 제어하는 키 배열
   */
  $keys?: string[];
  /**
   * 키에 포멧을 적용하는 함수
   * */
  $keyFormat?: (key: string, index: number) => ReactNode;
  /**
   * 키에 개별적으로 포멧을 적용하는 함수 또는 값
   * */
  $keyFormats?: Record<string, DICTIONARY<Dic>["$keyFormat"] | ReactNode>;
  /**
   * 값에 포멧을 적용하는 함수
   * */
  $valueFormat?: (value: any, key: string, index: number) => ReactNode;
  /**
   * 값에 개별적으로 포멧을 적용하는 함수 또는 값
   * */
  $valueFormats?: Record<string, DICTIONARY<Dic>["$valueFormat"] | ReactNode>;
}
export interface DICTIONARYCallback {
  Root?: string | FC<COLLECTION>;
  Entry?: FC<ENTRY>;
}
//todo: Dictionary === Form?
/*
 * todo: Dictionary를 COLLECTION으로 구성
 * Item = ENTRY
 * Entry -
 *  컬렉션 구조? Collection, Item
 * 객체를 entries로 변환하여 ? 아니다. dictionary는 키를 받아서 제어한다.
 *
 * */

export const DICTIONARY = Fxtsx(function DICTIONARY<T, Dic extends DicData>(
  rootProps: RootProps,
  restProps: RestProps<DICTIONARYProps<Dic>>,
  ref: ForwardedRef<T>
) {
  const {
    Root = Default,
    Entry = ENTRY,
    $data,
    $keys = Object.keys($data),
    $keyFormat = identity,
    $keyFormats = {} as Record<string, any>,
    $valueFormat = identity,
    $valueFormats = {} as Record<string, any>,
    ...dictionaryProps
  } = restProps;

  return createElement(COLLECTION, {
    "data-fx-dictionary": true,
    ...rootProps,
    ref,
    $data: [...$keys.entries()],
    Root: Root,
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
          {...dictionaryProps}
          $data={[key, $data[key]]}
          $keyLabel={keyLabel}
          $valueLabel={valueLabel}
        />
      );
    },
  });
});
