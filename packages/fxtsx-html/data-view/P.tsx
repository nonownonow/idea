import React from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

//todo: mode 에 따라서 ComponentPropsWithoutRef<T> 의 T가 바뀌도록
export const P = function P(props: VALUE) {
  const { $mode } = props;
  return (
    <VALUE
      data-fx-p
      {...props}
      $mode={$mode}
      Load={"div"}
      Read={"p"}
      Write={"input"}
    />
  );
};
