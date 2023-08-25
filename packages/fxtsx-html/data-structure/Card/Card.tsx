import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { LIST } from "fxtsx/LIST/LIST";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

export const Card = forwardRef(function Card(
  props: DICTIONARY,
  ref: ForwardedRef<HTMLDListElement>
) {
  return (
    <DICTIONARY
      data-fx-card
      {...props}
      List={(p) => (
        <LIST
          {...p}
          List={(p) => <dl {...p} ref={ref} />}
          Item={(p) => <>{p.children}</>}
        />
      )}
      Entry={(props) => <ENTRY Key={"dt"} Value={"dd"} {...props} />}
    />
  );
});
