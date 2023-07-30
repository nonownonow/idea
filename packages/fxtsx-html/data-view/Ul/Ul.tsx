import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { LIST } from "fxtsx/LIST/LIST";

export const Ul = forwardRef(function UL<Value>(
  props: LIST<Value>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <LIST
      {...props}
      List={(props) => <ul {...props} ref={ref} />}
      Item={(props) => <li {...props} />}
    />
  );
});
