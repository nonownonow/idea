import type { ComponentPropsWithoutRef, FC, JSX, ReactNode } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Default } from "fxtsx/Identity/Default";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";

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

export interface ENTRY extends ComponentPropsWithoutRef<"div"> {
  $key: string;
  $value?: ReactNode;
  name?: string;
  value?: string;
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
    Entry = Default,
    Key = Default,
    Value = Default,
    $key,
    $value,
    children,
    ...entryProps
  } = restProps;
  return createElement(
    Entry,
    {
      "data-fx-entry": true,
      "data-key": $key,
      ...rootProps,
    },
    [
      createElement(Key, { "data-fx-key": true, key: 0 }, $key),
      createElement(
        Value,
        { "data-fx-value": true, key: 1, ...entryProps },
        $value
      ),
      children,
    ]
  );
});
