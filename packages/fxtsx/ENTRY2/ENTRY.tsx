import type { FC, JSX, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Identity } from "fxtsx/Identity/Identity";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";

export type ENTNRYProps = ENTRY & ENTRYCallback;
export type ElementNames<P = any> = {
  [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K]
    ? K
    : never;
}[keyof JSX.IntrinsicElements];

/*type IsDataAttribute<K> = K extends `data-${string}` ? K : never;

export type DataAttributes = {
  [K in string]: K extends IsDataAttribute<K> ? boolean : never;
};*/

export interface ENTRY {
  $key: string;
  $value?: ReactNode;
  children?: ReactNode;
}
export interface ENTRYCallback {
  Entry?: ElementNames | FC<any>;
  Key?: ElementNames | FC<any>;
  Value?: ElementNames | FC<any>;
}
export const ENTRY = Fxtsx(function ENTRY(
  rootProps: RootProps,
  restProps: RestProps<ENTNRYProps>
) {
  const {
    Entry = Identity,
    Key = Identity,
    Value = Identity,
    $key,
    $value,
    ...entryProps
  } = restProps;
  return createElement(
    Entry,
    {
      "data-fx-entry": true,
      "data-key": $key,
      ...rootProps,
      ...entryProps,
    },
    [
      createElement(Key, { "data-fx-key": true, key: 0 }, $key),
      createElement(Value, { "data-fx-value": true, key: 1 }, $value),
    ]
  );
});
