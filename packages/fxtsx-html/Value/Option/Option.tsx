import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export const Option = forwardRef<HTMLOptionElement, VALUE>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"option"} value={props.$data} />
));
