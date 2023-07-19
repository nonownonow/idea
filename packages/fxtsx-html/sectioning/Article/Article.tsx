import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { Callback } from "fxtsx/fxtsx.type";

export type ArticleProps = SECTIONING & ComponentPropsWithoutRef<"article">;

const $Article: Callback["$Sectioning"] = forwardRef((props, ref) => (
  <article {...props} ref={ref} />
));
export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return (
    <SECTIONING
      {...props}
      $Sectioning={$Article}
      $Heading={Heading}
      ref={ref}
    />
  );
});
