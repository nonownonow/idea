import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";

export const Ol = forwardRef(function Ol<Value>(
  props: COLLECTION<Value>,
  ref: ForwardedRef<HTMLOListElement>
) {
  return (
    <COLLECTION
      data-fx-ol
      {...props}
      Root={(p) => <ol {...p} ref={ref} />}
      Item={(p) => <li {...p} />}
    />
  );
});
