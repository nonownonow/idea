import type { ComponentPropsWithoutRef, FC } from "react";
import { createElement } from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import { Default } from "fxtsx/Identity/Default";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";

export type ENTNRYProps = ENTRY &
  ENTRYCallback &
  ComponentPropsWithoutRef<"div">;

export interface ENTRY {
  /**
   * 엔트리 형태 = [key, value]
   * */
  $data: [string, any];
  /**
   * 키의 라벨
   * */
  $keyLabel?: string;
  /**
   * 값의 라벨
   * */
  $valueLabel?: string;
}
export interface ENTRYCallback {
  Entry?: string | FC<any>;
  Key?: string | FC<any>;
  Value?: string | FC<any>;
}

/**
 * 엔트리의 구조를 구현한 고차 컴포넌트
 * */
export const ENTRY = Fxtsx(function ENTRY(
  rootProps: RootProps,
  {
    Entry = Default,
    Key = Default,
    Value = Default,
    children,
    $data: [$key, $value],
    $keyLabel,
    $valueLabel,
    ...restProps
  }: RestProps<ENTNRYProps>,
  ref
) {
  return createElement(
    Entry,
    {
      "data-fx-entry": true,
      ref,
      ...rootProps,
    },
    [
      createElement(
        Key,
        { "data-fx-key": true, "data-key": $key, key: 0 },
        $keyLabel || $key
      ),
      createElement(
        Value,
        { "data-fx-value": true, "data-value": $value, key: 1, ...restProps },
        $valueLabel || $value
      ),
      children,
    ]
  );
});
