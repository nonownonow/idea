import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";
import type { DATAFRAMEProps } from "fxtsx/DATAFRAME/DATAFRAME";
import { DATAFRAME } from "fxtsx/DATAFRAME/DATAFRAME";
import { Card } from "fxtsx-html/data-structure/Card/Card";

export const CardList = forwardRef(function CardList(
  props: DATAFRAMEProps<any>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <DATAFRAME data-fx-card List={Ul} Dictionary={Card} {...props} ref={ref} />
  );
});
