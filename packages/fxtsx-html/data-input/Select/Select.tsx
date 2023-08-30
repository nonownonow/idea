import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY2/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";

export function Identity(p: ComponentPropsWithoutRef<"div">) {
  return <>{p.children}</>;
}
export function Noop() {
  return null;
}
export const Select = function Select(props: DICTIONARY) {
  return (
    <DICTIONARY
      {...props}
      Root={"fieldset"}
      Entry={(p) => (
        <ENTRY {...p} Root={Identity} Key={Noop} Value={InputBox} />
      )}
    />
  );
};
