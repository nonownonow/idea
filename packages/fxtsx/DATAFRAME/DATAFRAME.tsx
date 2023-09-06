import type { FC, ReactNode } from "react";
import React from "react";
import type { RestProps } from "fxtsx/COLLECTION/COLLECTION";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { identity } from "@fxts/core";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { DicData, RootProps } from "fxtsx/fxtsx.type";

export type DATAFRAMEProps<Dic extends DicData> = DATAFRAME<Dic> &
  DATAFRAMECallback<Dic>;
export interface DATAFRAME<Dic extends DicData>
  extends Omit<COLLECTION<Dic>, "$itemFormat">,
    Omit<DICTIONARY<Dic>, "$data"> {
  $itemFormat?: (value: ReactNode, index: number) => any;
}
export interface DATAFRAMECallback<Dic extends DicData> {
  Root?: FC<COLLECTION<Dic>>;
  Dictionary?: FC<any>;
}
export const DATAFRAME = Fxtsx(function DATAFRAME<Dic extends DicData>(
  rootProps: RootProps,
  restProps: RestProps<DATAFRAMEProps<Dic>>
) {
  const {
    $data: collection = [],
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
      $data={collection}
      $itemFormat={(item, index) =>
        // itemFormat 은 Item 으로 렌더링 되기 전, item 을 포멧팅한다.
        $itemFormat(
          <Dictionary
            $data={item}
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
