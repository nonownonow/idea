import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Heading } from "fxtsx-html/sectioning/H/Heading";
import type { Callback } from "fxtsx/fxtsx.type";

export type NavProps = SECTIONING & ComponentPropsWithoutRef<"nav">;
export const Sectioning: Callback["Root"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return (
    <SECTIONING Root={Sectioning} Heading={Heading} {...props} ref={ref} />
  );
});
