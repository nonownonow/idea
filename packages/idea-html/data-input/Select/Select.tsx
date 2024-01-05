import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { DICTIONARY } from "packages/idea/DICTIONARY/DICTIONARY";
import { ENTRY } from "packages/idea/ENTRY/ENTRY";
import { CheckOption } from "packages/idea-html/Value/CheckOption/CheckOption";
import { Identity, Noop } from "packages/idea/util/util";
import type { DicData } from "packages/idea/fxtsx.type";
import "./Select.css";

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
      data-select
      {...props}
      Root={"fieldset"}
      Entry={(p) => (
        <ENTRY {...p} Root={Identity} Key={Noop} Value={CheckOption} />
      )}
      $data={$options}
    />
  );
};
