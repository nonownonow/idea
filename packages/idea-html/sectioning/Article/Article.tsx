import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "packages/idea-html/sectioning/Heading/Heading";
import { SECTIONING } from "packages/idea/SECTIONING/SECTIONING";
import "./Article.css";

export type ArticleProps = SECTIONING & ComponentPropsWithoutRef<"article">;

export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return (
    <SECTIONING
      data-article
      {...props}
      Root={"article"}
      Heading={Heading}
      ref={ref}
    />
  );
});
