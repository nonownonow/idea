import type { ChangeEvent } from "react";
import React, { useState } from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";
import { identity } from "@fxts/core";
import { Ol } from "fxtsx-html/data-structure/Ol/Ol";
import type { LIST } from "fxtsx/LIST/LIST";
import "./FileField.css";

export type FileFieldProps = {
  $fileListFormat?: LIST<File>["$itemFormat"];
} & Omit<InputField, "type">;

export const FileField = function FileField(props: FileFieldProps) {
  const {
    onChange = identity,
    $fileListFormat = (file) => file.name,
    ...restProps
  } = props;
  const [files, setFiles] = useState<File[]>([]);
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    onChange(e);
    setFiles([...(e.target.files || [])]);
  }
  return (
    <InputField
      data-fx-file-field
      {...restProps}
      Input={"input"}
      type={"file"}
      multiple={true}
      onChange={onChangeHandler}
    >
      <Ol $data={files} $itemFormat={$fileListFormat} />
    </InputField>
  );
};
