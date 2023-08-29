import type { FC, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Default } from "fxtsx/Identity/Default";
import type { ElementNames, RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import type { DicValue } from "fxtsx/DICTIONARY2/DICTIONARY";
import { identity } from "@fxts/core";

export type ENTNRYProps = ENTRY & ENTRYCallback;

export interface ENTRY {
  $data: [string, DicValue];
  $index: number;
  $keyFormat?: string | ((key: string, index: number) => ReactNode);
  $valueFormat?:
    | string
    | ((value: DicValue, key: string, index: number) => ReactNode);
}
export interface ENTRYCallback {
  Entry?: ElementNames | FC<any>;
  Key?: ElementNames | FC<any>;
  Value?: ElementNames | FC<any>;
}
export const ENTRY = Fxtsx(function ENTRY(
  { children, ...rootProps }: RootProps,
  restProps: RestProps<ENTNRYProps>
) {
  const {
    Entry = Default,
    Key = Default,
    Value = Default,
    $index,
    $data: [key, value],
    $keyFormat = identity,
    $valueFormat = identity,
    ...entryProps
  } = restProps;

  return createElement(
    Entry,
    {
      "data-fx-entry": true,
      "data-key": key,
      ...rootProps,
    },
    [
      createElement(
        Key,
        { "data-fx-key": true, key: 0 },
        typeof $keyFormat === "string" ? $keyFormat : $keyFormat(key, $index)
      ),
      createElement(
        Value,
        { "data-fx-value": true, key: 1, ...entryProps },
        typeof $valueFormat === "string"
          ? $valueFormat
          : $valueFormat(value, key, $index)
      ),
      children,
    ]
  );
});
