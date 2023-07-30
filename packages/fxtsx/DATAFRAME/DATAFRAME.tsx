import type { FC } from "react";
import React from "react";
import { LIST } from "fxtsx/LIST/LIST";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";

export interface DATAFRAMEProps<Dic> extends LIST<Dic> {
  List: FC<LIST<Dic>>;
}

export const DATAFRAME = function DATAFRAME(props: any) {
  const {
    data = [],
    List = LIST,
    Dictionary = DICTIONARY,
    ...dataFrameProps
  } = props;
  return (
    <List
      data-fx-dataframe
      data={data}
      formatter={(a: any) => <Dictionary data={a} />}
      {...dataFrameProps}
    />
  );
};
