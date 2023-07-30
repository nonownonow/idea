import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { LIST } from "fxtsx/LIST/LIST";

export const UL = forwardRef(function UL<Value>(
  props: LIST<Value>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return <LIST {...props} List={(props) => <ul {...props} ref={ref} />} />;
});
