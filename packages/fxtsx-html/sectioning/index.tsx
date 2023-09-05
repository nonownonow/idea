import React, { forwardRef } from "react";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import { Legend } from "fxtsx-html/Value";

export type FieldsetProps = SECTIONING;

export const Fieldset = forwardRef<HTMLDivElement, FieldsetProps>(
  (props, ref) => (
    <SECTIONING {...props} Root={"fieldset"} Heading={Legend} ref={ref} />
  )
);
