import type { FC, ReactNode } from "react";
import React from "react";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import type { DicData } from "fxtsx/DICTIONARY/DICTIONARY";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { identity } from "@fxts/core";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";

export type DATAFRAMEProps<Dic extends DicData> = DATAFRAME<Dic> &
  DATAFRAMECallback<Dic>;
export interface DATAFRAME<Dic extends DicData>
  extends Omit<COLLECTION<Dic>, "$itemFormat">,
    Omit<DICTIONARY<Dic>, "$data"> {
  $itemFormat?: (value: ReactNode, index: number) => any;
}
export interface DATAFRAMECallback<Dic extends DicData> {
  Root?: FC<COLLECTION<Dic>>;
  Dictionary?: FC<DICTIONARY<Dic>>;
}
export const DATAFRAME = Fxtsx(function DATAFRAME<Dic extends DicData>(
  rootProps: RootProps,
  restProps: RestProps<DATAFRAMEProps<Dic>>
) {
  const {
    $data = [],
    Root = COLLECTION,
    Dictionary = DICTIONARY,
    $itemFormat = identity,
    $keyFormat = identity,
    $keyFormats,
    $valueFormat = identity,
    $valueFormats,
    ...dataFrameProps
  } = restProps;
  return (
    <Root
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
});
