import type { FC, ReactNode } from "react";
import React from "react";
import { Identity } from "fxtsx/Identity/Identity";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";

export type INPUTProps = INPUT & INPUTCallback;
export interface INPUT {}
export interface INPUTCallback {
  Label?: FC<{ children: ReactNode }>;
  Input?: FC;
}
export const INPUT = Fxtsx<any, INPUTProps>(function INPUT(
  rootProps,
  restProps
) {
  const { Label = Identity, Input = Identity, ...inputProps } = restProps;
  return (
    <Label data-fx-input {...rootProps}>
      <Input {...inputProps} />
    </Label>
  );
});
