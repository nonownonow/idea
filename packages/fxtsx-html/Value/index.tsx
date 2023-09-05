import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";
import { htmlChildren } from "fxtsx/util/util";

export const Span = forwardRef<HTMLParagraphElement, VALUE>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"span"} />
));

export type HProps = H & ComponentPropsWithoutRef<"h1">;
export type H = {
  $title: string;
  /**
   * 제목의 레벨
   */
  $level?: number;
  /**
   * 부제목
   */
};
export const H = forwardRef<HTMLHeadingElement, HProps>(
  ({ $level, $title, ...restProps }, ref) => (
    <VALUE
      ref={ref}
      Root={`h${$level}`}
      {...restProps}
      {...htmlChildren($title)}
    />
  )
);
