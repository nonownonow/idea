import type { ComponentPropsWithoutRef } from "react";
import React, { useState } from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";
import { identity } from "@fxts/core";
import { Ol } from "fxtsx-html/data-structure/Ol/Ol";
import type { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import "./FileField.css";

export type FileFieldProps = {
  $fileListFormat?: COLLECTION<File>["$itemFormat"];
} & Omit<InputField, "type" | "$data" | "$input"> &
  ComponentPropsWithoutRef<"input">;

export const FileField = function FileField({
  onChange = identity,
  id,
  $fileListFormat = (file) => file.name,
  ...restProps
}: FileFieldProps) {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <InputField
      data-fx-file-field
      {...restProps}
      type={"file"}
      $input={"input"}
      id={id}
      onChange={(e) => {
        onChange(e);
        const target = e.target as HTMLInputElement;
        setFiles([...(target.files || [])]);
      }}
    >
      <Ol $data={files} $itemFormat={$fileListFormat} />
    </InputField>
  );
};
