import type { FC } from "react";
import React from "react";
import { LIST } from "fxtsx/LIST/LIST";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { identity } from "@fxts/core";

export interface DATAFRAMEProps<Dic> extends LIST<Dic> {
  List: FC<LIST<Dic>>;
}

export const DATAFRAME = function DATAFRAME(props: any) {
  const {
    data = [],
    List = LIST,
    Dictionary = DICTIONARY,
    formatter = identity,
    keyFormat = identity,
    keyFormats = identity,
    valueFormat = identity,
    valueFormats = identity,
    ...dataFrameProps
  } = props;
  return (
    <List
      data-fx-dataframe
      data={data}
      formatter={(a: any) =>
        formatter(
          <Dictionary
            data={a}
            keyFormat={keyFormat}
            keyFormats={keyFormats}
            valueFormat={valueFormat}
            valueFormats={valueFormats}
          />
        )
      }
      {...dataFrameProps}
    />
  );
};
