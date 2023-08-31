import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type TdProps = ComponentPropsWithoutRef<"dd"> & VALUE;
export const Td = forwardRef<HTMLTableCellElement, TdProps>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"td"} />
));
