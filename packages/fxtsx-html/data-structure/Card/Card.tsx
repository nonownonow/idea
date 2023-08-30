import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

export const Card = forwardRef(function Card(
  props: DICTIONARY,
  ref: ForwardedRef<HTMLDListElement>
) {
  return (
    <DICTIONARY
      data-fx-card
      {...props}
      Root={(p) => (
        <COLLECTION
          {...p}
          Root={(p) => <dl {...p} ref={ref} />}
          Item={(p) => <>{p.children}</>}
        />
      )}
      Entry={(props) => <ENTRY Key={"dt"} Value={"dd"} {...props} />}
    />
  );
});
