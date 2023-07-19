import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { H } from "fxtsx-html/sectioning/H/H";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { Callback } from "fxtsx/fxtsx.type";

export type SectionProps = SECTIONING & ComponentPropsWithoutRef<"div">;

export const $Section: Callback["$Sectioning"] = forwardRef((props, ref) => {
  return <section {...props} ref={ref} />;
});
export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section(props, ref) {
    return (
      <SECTIONING {...props} $Sectioning={$Section} $Heading={H} ref={ref} />
    );
  }
);
