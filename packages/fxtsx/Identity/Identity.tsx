import React, { forwardRef } from "react";
import { entries, map, pipe } from "@fxts/core";
import { kebabCase } from "lodash";

export const Identity = forwardRef(function Identity(
  props: Record<string, unknown>,
  ref
) {
  const toNativeProps = pipe(
    entries(props),
    map(([k, v]) => [k === "className" ? k : kebabCase(k as string), v]),
    Object.fromEntries
  );
  return <div {...toNativeProps} ref={ref} />;
});
