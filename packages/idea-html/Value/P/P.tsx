import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";

export type DdProps = ComponentPropsWithoutRef<"p"> & VALUE;
export const P = forwardRef<HTMLParagraphElement, DdProps>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"p"} />
));
