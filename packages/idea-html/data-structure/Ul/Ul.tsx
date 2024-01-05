import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { COLLECTION } from "packages/idea/COLLECTION/COLLECTION";

export const Ul = forwardRef(function Ul<Value>(
  props: COLLECTION<Value>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return <COLLECTION data-fx-ul {...props} Root={"ul"} Item={"li"} ref={ref} />;
});
