import React from "react";
import { InputField } from "fxtsx-html/data-input/InputField/InputField";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";
import "./Tag.css";

export type TagProps = Omit<InputField, "$error">;

export const Tag = function Tag(props: TagProps) {
  return <InputField data-fx-tag Input={InputBox} {...props} />;
};
