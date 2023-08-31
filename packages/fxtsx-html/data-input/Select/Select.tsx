import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY2/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { CheckOption } from "fxtsx-html/Value/CheckOption/CheckOption";

export function Identity(p: ComponentPropsWithoutRef<"div">) {
  return <>{p.children}</>;
}
export function Noop() {
  return null;
}

export type SelectProps = DICTIONARY & ComponentPropsWithoutRef<"input">;

export type Select = DICTIONARY & {
  $key: string;
};
export const Select = function Select(props: SelectProps) {
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
