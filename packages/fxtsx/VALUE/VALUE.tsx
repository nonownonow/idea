import type { ElementType, FC } from "react";
import { createElement } from "react";
import { Identity } from "fxtsx/Identity/Identity";

export type CallbackComp = ElementType | FC;
export type BasicValue = string | number | boolean | null;
export type BasicValues = BasicValue[];
export interface VALUECallback {
  /**
   * Load 모드를 구현하는 컨포넌트
   */
  Load?: ElementType | FC;
  /**
   * Read 모드를 구현하는 컨포넌트
   */
  Read?: ElementType | FC;
  /**
   * Write 모드를 구현하는 컨포넌트
   */
  Write?: ElementType | FC;
}

export interface VALUE {
  /**
   * 모드
   * - Load : 데이터 로딩 중
   * - Read : 데이터 읽기, 기본모드
   * - Write : 데이터 쓰기, 업데이트
   */
  $mode?: "Load" | "Read" | "Write";
  /**
   * 객체와 함수를 제외한 값
   */
  $value?:
    | string
    | number
    | boolean
    | undefined
    | null
    | (string | number | boolean | undefined | null)[];
  $defaultValue?:
    | string
    | number
    | boolean
    | undefined
    | null
    | (string | number | boolean | undefined | null)[];
  /**
   * = $value 프로퍼티
   */
  children?: VALUE["$value"];
}

export type VALUEProps = VALUE & VALUECallback;
export const VALUE = function VALUE(props: VALUEProps) {
  const {
    Load = Identity,
    Read = Identity,
    Write = Identity,
    $mode = "Read",
    $value,
    $defaultValue,
    children = $value || $defaultValue,
    ...valueProps
  } = props;
  const CompMap = {
    Load,
    Read,
    Write,
  };

  return createElement(
    CompMap[$mode] as any,
    {
      "data-fx-value": true,
      "data-fx-mode": $mode,
      value: $mode === "Write" ? $value : null,
      defaultValue: $mode === "Write" ? $defaultValue : null,
      ...valueProps,
    } as any,
    $mode === "Write" ? null : children
  );
};
