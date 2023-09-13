import React, { forwardRef } from "react";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import { Legend } from "fxtsx-html/Value";
import "./Fieldset.css";

export type FieldsetProps = SECTIONING;

export const Fieldset = forwardRef<HTMLDivElement, FieldsetProps>(
  (props, ref) => (
    <SECTIONING
      data-fieldset
      {...props}
      Root={"fieldset"}
      Heading={Legend}
      ref={ref}
    />
  )
);
