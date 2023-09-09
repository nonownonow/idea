import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { CheckOption } from "fxtsx-html/Value/CheckOption/CheckOption";
import { Identity, Noop } from "fxtsx/util/util";
import type { DicData } from "fxtsx/fxtsx.type";

export type SelectProps<Dic extends DicData> = Select<Dic> &
  ComponentPropsWithoutRef<"input">;

export type Select<Dic extends DicData> = {
  $options: DICTIONARY<Dic>["$data"];
  $valueFormats?: DICTIONARY<Dic>["$valueFormats"];
};
export const Select = function Select<Dic extends DicData>({
  $options,
  ...props
}: SelectProps<Dic>) {
  return (
    <DICTIONARY
      {...props}
      Root={"fieldset"}
      Entry={(p) => (
        <ENTRY {...p} Root={Identity} Key={Noop} Value={CheckOption} />
      )}
      $data={$options}
    />
  );
};
