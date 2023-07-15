import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { H } from "fxtsx-html/sectioning/H/H";
import type {
  $SECTIONINGProps,
  SECTIONINGProps,
} from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";

export type SectionProps = $SECTIONINGProps & ComponentPropsWithoutRef<"div">;

const $Section: SECTIONINGProps["$Section"] = forwardRef((props, ref) => {
  return <section {...props} ref={ref} />;
});
export const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section(props, ref) {
    return <SECTIONING {...props} $Section={$Section} $Heading={H} ref={ref} />;
  }
);
