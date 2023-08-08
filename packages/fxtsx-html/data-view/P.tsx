import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type PProps = VALUE & ComponentPropsWithoutRef<"textarea">;
/**
 * - [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 */
export const P = function P(props: PProps) {
  const { $mode } = props;
  return (
    <VALUE
      data-fx-p
      {...props}
      $mode={$mode}
      Load={"div"}
      Read={"p"}
      Write={"textarea"}
    />
  );
};
