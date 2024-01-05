import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "packages/idea/DICTIONARY/DICTIONARY";
import { ENTRY } from "packages/idea/ENTRY/ENTRY";
import { Dt } from "packages/idea-html/Value/Dt/Dt";
import { Dd } from "packages/idea-html/Value/Dd/Dd";
import type { DicData } from "packages/idea/fxtsx.type";

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
