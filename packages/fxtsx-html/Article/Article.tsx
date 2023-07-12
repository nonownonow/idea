import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import type { $SECTIONProps, SECTIONProps } from "fxtsx/SECTION/SECTION";
import { SECTION } from "fxtsx/SECTION/SECTION";
import { Heading } from "../Heading/Heading";

export type ArticleProps = $SECTIONProps & ComponentPropsWithoutRef<"article">;

const $Section: SECTIONProps["$Section"] = forwardRef<HTMLElement>(
  (props, ref) => {
    return <article {...props} ref={ref} />;
  }
);
export const Article = forwardRef<HTMLElement, ArticleProps>(function (
  props,
  ref
) {
  return (
    <SECTION {...props} $Section={$Section} $Heading={Heading} ref={ref} />
  );
});
