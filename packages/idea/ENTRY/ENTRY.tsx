import type { FC } from "react";
import { createElement } from "react";
import { Fxtsx } from "packages/idea/FxTsx/FxTsx";
import { Default } from "packages/idea/Identity/Default";
import type { RootProps } from "packages/idea/fxtsx.type";
import type { RestProps } from "packages/idea/COLLECTION/COLLECTION";

export type ENTNRYProps = ENTRY & ENTRYCallback;

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
  Root?: string | FC<any>;
  Key?: string | FC<any>;
  Value?: string | FC<any>;
}

/**
 * 엔트리의 구조를 구현한 고차 컴포넌트
 * */
export const ENTRY = Fxtsx(function ENTRY(
  rootProps: RootProps,
  {
    Root = Default,
    Key = Default,
    Value = Default,
    $data: [$key, $value],
    $keyLabel,
    $valueLabel,
    ...restProps
  }: RestProps<ENTNRYProps>,
  ref
) {
  return createElement(
    Root,
    {
      "data-fx-entry": true,
      ref,
      ...rootProps,
    },
    [
      createElement(
        Key,
        { "data-key": $key, key: 0, $label: $keyLabel },
        $keyLabel || $key
      ),
      createElement(
        Value,
        {
          "data-value": $value,
          key: 1,
          $data: $value,
          ...restProps,
        },
        $valueLabel || $value
      ),
    ]
  );
});
