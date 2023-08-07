import type { ElementType, FC } from "react";
import React, { createElement } from "react";
import { Identity } from "fxtsx/Identity/Identity";

export type CallbackComp = ElementType | FC;
export type BasicValue = string | number | boolean | undefined | null;
export type BasicValues = BasicValue[];
export interface VALUECallback {
  Load?: ElementType | FC;
  Read?: ElementType | FC;
  Write?: ElementType | FC;
}

export interface VALUE {
  $mode: "Load" | "Read" | "Write";
  $value?: BasicValue | BasicValues;
}

export type VALUEProps = VALUE & VALUECallback;
export const VALUE = function VALUE(props: VALUEProps) {
  const {
    Load = Identity,
    Read = Identity,
    Write = Identity,
    $mode = "Read",
    $value,
    ...valueProps
  } = props;
  const CompMap = {
    Load,
    Read,
    Write,
  };
  // return <div data-fx-value {...valueProps} />;
  return createElement(
    CompMap[$mode] as any,
    {
      "data-fx-value": true,
      ...valueProps,
    } as any,
    $value
  );
};
