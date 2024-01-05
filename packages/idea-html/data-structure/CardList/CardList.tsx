import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { Ul } from "packages/idea-html/data-structure/Ul/Ul";
import type { DATAFRAMEProps } from "packages/idea/DATAFRAME/DATAFRAME";
import { DATAFRAME } from "packages/idea/DATAFRAME/DATAFRAME";
import { Card } from "packages/idea-html/data-structure/Card/Card";
import type { DicData } from "packages/idea/fxtsx.type";

export const CardList = forwardRef(function CardList<Dic extends DicData>(
  props: DATAFRAMEProps<Dic>,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <DATAFRAME data-fx-card Root={Ul} Dictionary={Card} {...props} ref={ref} />
  );
});
