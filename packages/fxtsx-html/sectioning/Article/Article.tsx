import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import type { SECTIONINGCallback } from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";

export type ArticleProps = SECTIONING & ComponentPropsWithoutRef<"article">;

const Sectioning: SECTIONINGCallback["Sectioning"] = forwardRef(
  (props, ref) => <article {...props} ref={ref} />
);
export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return (
    <SECTIONING
      {...props}
      Sectioning={Sectioning}
      Heading={Heading}
      ref={ref}
    />
  );
});
