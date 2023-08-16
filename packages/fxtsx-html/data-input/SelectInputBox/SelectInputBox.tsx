import React from "react";
import { LIST } from "fxtsx/LIST/LIST";
import { Checkbox } from "fxtsx-html/data-input/InputBox/Checkbox/Checkbox";

// export type TextFieldProps =

export const SelectInputBox = function SelectInputBox<T>(props: LIST<T>) {
  return (
    <LIST
      data-fx-select-box
      List={"fieldset"}
      Item={({ children }) => <Checkbox value={children} />}
      {...props}
    />
  );
};
