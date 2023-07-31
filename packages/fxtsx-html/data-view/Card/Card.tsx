import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { Dl } from "fxtsx-html/data-view/Dl/Dl";

export const Card = forwardRef(function Card(
  props: DICTIONARY,
  ref: ForwardedRef<HTMLDListElement>
) {
  return (
    <DICTIONARY
      data-fx-card
      {...props}
      List={Dl}
      Key={(p) => <dt {...p} />}
      Value={(p) => <dd {...p} />}
    />
  );
});
