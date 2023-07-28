import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import { LIST } from "fxtsx/LIST/LIST";
import { Identity } from "fxtsx/Identity/Identity";
import { identity } from "@fxts/core";

export type DicValue = string | number | boolean | undefined | null;
export type DicData = Record<string, DicValue>;
export type DICTIONARYProps<T, V extends DicData = {}> = DICTIONARY<V> &
  DICTIONARYCallback<T>;

export interface DICTIONARY<V extends DicData = {}> {
  data: V;
  children?: ReactNode;
  keys?: string[];
  keyFormat?: (key: string, index: number) => ReactNode;
  keyFormats?: Partial<{ [K in keyof V]: DICTIONARY["keyFormat"] | string }>;
  valueFormat?: (value: DicValue, key: string, index: number) => ReactNode;
  valueFormats?: Partial<{ [K in keyof V]: DICTIONARY["valueFormat"] }>;
}

export interface DICTIONARYCallback<T> {
  //todo: Dictionary?:FC<LIST>
  Dictionary?: FC<{ ref: Ref<T>; children: ReactNode }>;
  Entry?: FC<{ children: ReactNode }>;
  Key?: FC<{ children: ReactNode }>;
  Value?: FC<{ children: ReactNode }>;
}
//todo: List를 Dictionary로 받아서 처리하도록 리팩토 그리고 Entry 재정의가 아니라, formatter 에서 Key Value 로 확장하기

export const DICTIONARY = Fxtsx(function DICTIONARY<T, V extends DicData>(
  rootProps: RootProps,
  restProps: RestProps<DICTIONARYProps<T, V>>,
  ref: ForwardedRef<T>
) {
  const {
    Dictionary = Identity,
    Entry = Identity,
    Key = Identity,
    Value = Identity,
    data,
    keys = Object.keys(data),
    keyFormat = identity,
    keyFormats = {} as { [K in keyof V]: any },
    valueFormat = identity,
    valueFormats = {} as { [K in keyof V]: any },
    ...dictionaryProps
  } = restProps;
  return (
    <LIST
      data-fx-dictionary
      {...rootProps}
      {...dictionaryProps}
      ref={ref}
      data={keys}
      List={Dictionary}
      Entry={({ value: key, index }) => (
        <Entry>
          <Key>
            {key in keyFormats
              ? typeof keyFormats[key] === "string"
                ? keyFormats[key]
                : keyFormats[key](key, index)
              : keyFormat(key, index)}
          </Key>
          <Value>
            {key in valueFormats
              ? valueFormats[key](data[key], key, index)
              : valueFormat(data[key], key, index)}
          </Value>
          {/*<Value>{valueFormat(data[key], key, index)}</Value>*/}
        </Entry>
      )}
    />
  );
});
