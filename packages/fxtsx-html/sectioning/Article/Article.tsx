import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { Heading } from "../Heading/Heading";
import type {
  $SECTIONINGProps,
  SECTIONINGProps,
} from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";

export type ArticleProps = $SECTIONINGProps &
  ComponentPropsWithoutRef<"article">;

const $Article: SECTIONINGProps["$Section"] = forwardRef((props, ref) => (
  <article {...props} ref={ref} />
));
export const Article = forwardRef<HTMLElement, ArticleProps>(function Article(
  props,
  ref
) {
  return (
    <SECTIONING {...props} $Section={$Article} $Heading={Heading} ref={ref} />
  );
});
