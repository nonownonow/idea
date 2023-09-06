import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY2/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { Dt } from "fxtsx-html/Value/Dt/Dt";
import { Dd } from "fxtsx-html/Value/Dd/Dd";
import type { DicData } from "fxtsx/fxtsx.type";

export type CardProps<Dic extends DicData> = DICTIONARY<Dic> &
  Omit<HTMLDListElement, "children">;
export const Card = forwardRef(function Card<Dic extends DicData>(
  props: CardProps<Dic>,
  ref: ForwardedRef<HTMLDListElement>
) {
  return (
    <DICTIONARY
      data-fx-card
      ref={ref}
      {...props}
      Root={"dl"}
      Entry={(props) => <ENTRY Root={"div"} Key={Dt} Value={Dd} {...props} />}
    />
  );
});
