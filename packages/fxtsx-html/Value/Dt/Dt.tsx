import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type DtProps = ComponentPropsWithoutRef<"dt"> & VALUE;
export const Dt = forwardRef<HTMLElement, DtProps>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"dt"} />
));
