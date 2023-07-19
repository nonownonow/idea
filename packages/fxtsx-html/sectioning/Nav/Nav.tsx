import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { H } from "fxtsx-html/sectioning/H/H";
import type { Callback } from "fxtsx/fxtsx.type";

export type NavProps = SECTIONING & ComponentPropsWithoutRef<"nav">;
export const $Section: Callback["$Sectioning"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return (
    <SECTIONING $Sectioning={$Section} $Heading={H} {...props} ref={ref} />
  );
});
