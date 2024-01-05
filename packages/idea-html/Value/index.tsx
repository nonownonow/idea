import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";
import { htmlChildren } from "packages/idea/util/util";

export const Span = forwardRef<HTMLParagraphElement, VALUE>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"span"} />
));

export const Legend = forwardRef<HTMLLegendElement, VALUE>((props, ref) => (
  <VALUE ref={ref} {...props} Root={"legend"} />
));

export type HProps = H & ComponentPropsWithoutRef<"h1">;
export interface H {
  $title?: string;
  /**
   * 제목의 레벨
   */
  $level: number;
  /**
   * 부제목
   */
}
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
