import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { createElement } from "react";

export type ButtonProps =
  | {
      $label: ReactNode;
      $url?: string;
    } & (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

export const Button = function Button(props: ButtonProps) {
  const { $label, children = $label, $url, ...restProps } = props;
  return createElement(
    $url ? "a" : "button",
    { "data-fx-button": true, href: $url ? $url : null, ...restProps },
    children
  );
};
