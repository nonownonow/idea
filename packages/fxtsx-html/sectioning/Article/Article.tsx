import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import type { SECTIONINGCallback } from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { HEADING } from "fxtsx/HEADING/HEADING";

export type ArticleProps = SECTIONING &
  ComponentPropsWithoutRef<"article"> &
  HEADING;

const Sectioning: SECTIONINGCallback["Root"] = forwardRef((props, ref) => (
  <article {...props} ref={ref} />
));
export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return (
    <SECTIONING {...props} Root={Sectioning} Heading={Heading} ref={ref} />
  );
});
