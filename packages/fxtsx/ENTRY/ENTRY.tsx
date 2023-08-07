import type { FC } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Identity } from "fxtsx/Identity/Identity";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";
import type { VALUE } from "fxtsx/VALUE/VALUE";

export type ENTNRYProps = VALUE & ENTRY & ENTRYCallback;
export interface ENTRY {
  $key: string;
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
    $mode,
    ...entryProps
  } = restProps;
  return (
    <Entry data-fx-entry {...rootProps} {...entryProps}>
      <Key data-key={$key}>{$key}</Key>
      <Value $mode={$mode} $value={$value}>
        {$value}
      </Value>
    </Entry>
  );
});
