import React, { forwardRef } from "react";
import { SECTIONING } from "packages/idea/SECTIONING/SECTIONING";
import { Legend } from "packages/idea-html/Value";
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
