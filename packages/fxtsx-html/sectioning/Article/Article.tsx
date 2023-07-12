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

export const Article = forwardRef<HTMLElement, ArticleProps>(function (
  props,
  ref
) {
  const $Section: SECTIONINGProps["$Section"] = forwardRef((props, ref) => {
    return <article {...props} ref={ref} />;
  });

  return (
    <SECTIONING {...props} $Section={$Section} $Heading={Heading} ref={ref} />
  );
});
