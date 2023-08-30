import React from "react";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";

// export type TextFieldProps =

export const SelectBox = function SelectBox<T>(props: COLLECTION<T>) {
  return (
    <COLLECTION data-fx-select-box Root={"select"} Item={"option"} {...props} />
  );
};
