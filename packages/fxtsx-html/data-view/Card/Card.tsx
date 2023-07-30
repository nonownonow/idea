import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";

export const Card = forwardRef(function Card(
  props: DICTIONARY,
  ref: ForwardedRef<HTMLDListElement>
) {
  return <DICTIONARY data-fx-dl {...props} />;
});
