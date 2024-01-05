import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "packages/idea-html/sectioning/Heading/Heading";
import type { SECTIONINGCallback } from "packages/idea/SECTIONING/SECTIONING";
import { SECTIONING } from "packages/idea/SECTIONING/SECTIONING";

export type SectionProps = SECTIONING & ComponentPropsWithoutRef<"div">;

export const Sectioning: SECTIONINGCallback["Root"] = forwardRef(
  (props, ref) => {
    return <section {...props} ref={ref} />;
  }
);
export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section(props, ref) {
    return (
      <SECTIONING {...props} Root={Sectioning} Heading={Heading} ref={ref} />
    );
  }
);
