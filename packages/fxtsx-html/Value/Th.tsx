import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export const Th = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<"dd"> & VALUE
>((props, ref) => <VALUE ref={ref} {...props} Root={"th"} />);
