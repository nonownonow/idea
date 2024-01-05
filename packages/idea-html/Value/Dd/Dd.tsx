import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";

export type DdProps = ComponentPropsWithoutRef<"dd"> & VALUE;
export const Dd = forwardRef<HTMLElement, DdProps>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"dd"} />
));
