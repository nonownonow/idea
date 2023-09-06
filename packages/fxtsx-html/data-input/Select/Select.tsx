import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY2/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { CheckOption } from "fxtsx-html/Value/CheckOption/CheckOption";
import { Identity, Noop } from "fxtsx/util/util";
import type { DicData } from "fxtsx/fxtsx.type";

export type SelectProps<Dic extends DicData> = DICTIONARY<Dic> &
  ComponentPropsWithoutRef<"input">;

export type Select<Dic extends DicData> = DICTIONARY<Dic> & {
  $key: string;
};
export const Select = function Select<Dic extends DicData>(
  props: SelectProps<Dic>
) {
  return (
    <DICTIONARY
      {...props}
      Root={"fieldset"}
      Entry={(p) => (
        <ENTRY {...p} Root={Identity} Key={Noop} Value={CheckOption} />
      )}
    />
  );
};
