import type { FC } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Identity } from "fxtsx/Identity/Identity";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import type { VALUE } from "fxtsx/VALUE/VALUE";

export type ENTNRYProps = ENTRY & ENTRYCallback;
export interface ENTRY {
  $key: string;
  $value:
    | string
    | number
    | boolean
    | undefined
    | null
    | (string | number | boolean | undefined | null)[];
}
export interface ENTRYCallback {
  Entry?: FC;
  Key?: FC;
  Value?: FC<VALUE>;
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
  return (
    <Entry data-fx-entry {...rootProps} {...entryProps} data-key={$key}>
      <Key $key={$key} />
      <Value $value={$value} />
    </Entry>
  );
});
