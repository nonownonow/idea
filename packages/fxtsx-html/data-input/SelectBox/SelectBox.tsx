import React from "react";
import { LIST } from "fxtsx/LIST/LIST";

// export type TextFieldProps =

export const SelectBox = function SelectBox<T>(props: LIST<T>) {
  return <LIST data-fx-select-box List={"select"} Item={"option"} {...props} />;
};
