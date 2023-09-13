import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type ButtonProps = VALUE & {
  $url?: string;
} & (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ $url, ...restProps }, ref) => (
  <VALUE
    data-fx-button
    Root={$url ? "a" : "button"}
    href={$url ? $url : undefined}
    ref={ref}
    {...restProps}
  />
));
