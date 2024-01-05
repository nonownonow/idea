import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";

export type ButtonProps = VALUE &
  (
    | ({ $url: string } & ComponentPropsWithoutRef<"a">)
    | ({ $url?: never } & ComponentPropsWithoutRef<"button">)
  );

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
