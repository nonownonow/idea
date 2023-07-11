import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import type { $SECTIONProps, SECTIONProps } from "fxtsx/SECTION/SECTION";
import { SECTION } from "fxtsx/SECTION/SECTION";
import { Heading } from "../Heading/Heading";

export type SectionProps = $SECTIONProps & ComponentPropsWithoutRef<"div">;

const $Section: SECTIONProps["$Section"] = forwardRef((props, ref) => {
  return <section {...props} ref={ref} />;
});
export const Section = forwardRef<HTMLDivElement, SectionProps>(function (
  props,
  ref
) {
  return (
    <SECTION {...props} $Section={$Section} $Heading={Heading} ref={ref} />
  );
});
