import React, { forwardRef } from "react";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { SectionProps } from "fxtsx-html/sectioning/Section/Section";

export const Fieldset = forwardRef<
  HTMLDivElement,
  Omit<SectionProps, "$level">
>((props, ref) => (
  <SECTIONING {...props} Root={"fieldset"} Heading={"legend"} ref={ref} />
));
