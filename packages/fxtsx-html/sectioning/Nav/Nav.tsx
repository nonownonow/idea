import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { H } from "fxtsx-html/sectioning/H/H";
import type { Callback } from "fxtsx/fxtsx.type";

export type NavProps = SECTIONING & ComponentPropsWithoutRef<"nav">;
export const $Section: Callback["$Section"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return <SECTIONING $Section={$Section} $Heading={H} {...props} ref={ref} />;
});
