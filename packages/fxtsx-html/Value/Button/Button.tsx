import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import { VALUE } from "fxtsx/VALUE/VALUE";

export type ButtonProps = (
  | ComponentPropsWithoutRef<"button">
  | ComponentPropsWithoutRef<"a">
) &
  Button;
export type Button = {
  $label?: ReactNode;
  $url?: string;
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ $url, $label, ...restProps }, ref) => (
  <VALUE
    data-fx-button
    Root={$url ? "a" : "button"}
    href={$url ? $url : undefined}
    ref={ref}
    $valueLabel={$label}
    {...restProps}
  />
));
