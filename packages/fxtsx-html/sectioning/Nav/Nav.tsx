import type {
  $SECTIONINGProps,
  SECTIONINGProps,
} from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { H } from "fxtsx-html/sectioning/H/H";

export type NavProps = $SECTIONINGProps & ComponentPropsWithoutRef<"nav">;
export const Section: SECTIONINGProps["$Section"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return <SECTIONING $Section={Section} $Heading={H} {...props} ref={ref} />;
});
