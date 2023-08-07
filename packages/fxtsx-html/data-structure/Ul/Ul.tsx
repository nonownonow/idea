import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { LIST } from "fxtsx/LIST/LIST";

export const Ul = forwardRef(function Ul<Value>(
  props: LIST<Value>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <LIST
      data-fx-ul
      {...props}
      List={(props) => <ul {...props} ref={ref} />}
      Item={(props) => <li {...props} />}
    />
  );
});
