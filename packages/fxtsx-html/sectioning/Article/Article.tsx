import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "fxtsx-html/sectioning/Heading/Heading";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { HEADING } from "fxtsx/HEADING/HEADING";

export type ArticleProps = SECTIONING &
  ComponentPropsWithoutRef<"article"> &
  HEADING;

export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return <SECTIONING {...props} Root={"article"} Heading={Heading} ref={ref} />;
});
