import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";

// export type DICTIONARYProps =

export const DICTIONARY = Fxtsx<any, any>(function DICTIONARY(
  rootProps: any,
  restProps: any
) {
  return <div data-fx-dictionary {...rootProps} {...restProps} />;
});
