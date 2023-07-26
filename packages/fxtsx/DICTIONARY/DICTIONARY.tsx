import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import { LIST } from "fxtsx/LIST/LIST";
import { Identity } from "fxtsx/Identity/Identity";

export type DicData = Record<
  string,
  string | number | boolean | undefined | null
>;
export type DICTIONARYProps<T, V extends DicData = {}> = DICTIONARY<V> &
  DICTIONARYCallback<T>;

export interface DICTIONARY<V extends DicData = {}> {
  data: V;
  children?: ReactNode;
  keys?: string[];
}

export interface DICTIONARYCallback<T> {
  Dictionary?: FC<{ ref: Ref<T>; children: ReactNode }>;
  Entry?: FC<{ children: ReactNode }>;
  Key?: FC<{ children: ReactNode }>;
  Value?: FC<{ children: ReactNode }>;
}

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
      Entry={({ value: key }) => (
        <Entry>
          <Key>{key}</Key>
          <Value>{data[key]}</Value>
        </Entry>
      )}
    />
  );
});
