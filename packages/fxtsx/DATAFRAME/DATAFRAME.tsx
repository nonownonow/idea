import type { FC } from "react";
import React from "react";
import type { LIST } from "fxtsx/LIST/LIST";
import { Identity } from "fxtsx/Identity/Identity";

export interface DATAFRAMEProps<Dic> extends LIST<Dic> {
  List: FC<LIST<Dic>>;
}

export const DATAFRAME = function DATAFRAME(props: any) {
  const {
    data = [],
    List = Identity,
    Element = Identity,
    Dictionary = Identity,
    Entry = Identity,
    Key = Identity,
    Value = Identity,
    ...dataFrameProps
  } = props;
  return (
    <List data-fx-dataframe {...dataFrameProps}>
      {data.map((obj: any, index: any) => (
        <Element key={index}>
          <Dictionary>
            {Object.entries(obj).map(([k, v]: any) => (
              <Entry key={k}>
                <Key>{k}</Key>
                <Value>{v}</Value>
              </Entry>
            ))}
          </Dictionary>
        </Element>
      ))}
    </List>
  );
};
