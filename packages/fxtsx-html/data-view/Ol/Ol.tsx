import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { LIST } from "fxtsx/LIST/LIST";

export const Ol = forwardRef(function Ol<Value>(
  props: LIST<Value>,
  ref: ForwardedRef<HTMLOListElement>
) {
  return (
    <LIST
      data-fx-ol
      {...props}
      List={(p) => <ol {...p} ref={ref} />}
      Item={(p) => <li {...p} />}
    />
  );
});
