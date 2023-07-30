import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { LIST } from "fxtsx/LIST/LIST";

export const Dl = forwardRef(function Dl<Value>(
  props: LIST<Value>,
  ref: ForwardedRef<HTMLDListElement>
) {
  return (
    <LIST
      data-fx-dl
      {...props}
      List={(p) => <dl {...p} ref={ref} />}
      Item={(p) => <div {...p} />}
    />
  );
});
