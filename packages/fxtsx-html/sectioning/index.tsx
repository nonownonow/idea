import React, { forwardRef } from "react";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";

export type FieldsetProps = SECTIONING;

export const Fieldset = forwardRef<HTMLDivElement, FieldsetProps>(
  (props, ref) => (
    <SECTIONING {...props} Root={"fieldset"} Heading={"legend"} ref={ref} />
  )
);
