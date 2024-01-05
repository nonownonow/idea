import { SECTIONING } from "packages/idea/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Heading } from "packages/idea-html/sectioning/Heading/Heading";
import type { Callback } from "packages/idea/fxtsx.type";

export type NavProps = SECTIONING & ComponentPropsWithoutRef<"nav">;
export const Sectioning: Callback["Root"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return (
    <SECTIONING Root={Sectioning} Heading={Heading} {...props} ref={ref} />
  );
});
