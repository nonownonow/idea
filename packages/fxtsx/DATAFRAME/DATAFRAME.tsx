import type { FC, ReactNode } from "react";
import React from "react";
import { LIST } from "fxtsx/LIST/LIST";
import type { DicData } from "fxtsx/DICTIONARY/DICTIONARY";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { identity } from "@fxts/core";

export interface DATAFRAMEProps<Dic extends DicData>
  extends Omit<LIST<Dic>, "$itemFormat">,
    Omit<DICTIONARY<Dic>, "$data"> {
  List?: FC<LIST<Dic>>;
  Dictionary?: FC<DICTIONARY<Dic>>;
  $itemFormat?: (value: ReactNode, index: number) => any;
}

export const DATAFRAME = function DATAFRAME<Dic extends DicData>(
  props: DATAFRAMEProps<Dic>
) {
  const {
    $data = [],
    List = LIST,
    Dictionary = DICTIONARY,
    $itemFormat = identity,
    $keyFormat = identity,
    $keyFormats,
    $valueFormat = identity,
    $valueFormats,
    ...dataFrameProps
  } = props;
  return (
    <List
      data-fx-dataframe
      $data={$data}
      $itemFormat={(a, index) =>
        $itemFormat(
          <Dictionary
            $data={a}
            $keyFormat={$keyFormat}
            $keyFormats={$keyFormats}
            $valueFormat={$valueFormat}
            $valueFormats={$valueFormats}
          />,
          index
        )
      }
      {...dataFrameProps}
    />
  );
};
