import type {
  $SECTIONINGProps,
  SECTIONINGProps,
} from "fxtsx/SECTIONING/SECTIONING";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Heading } from "../Heading/Heading";

export type NavProps = $SECTIONINGProps & ComponentPropsWithoutRef<"nav">;
export const Section: SECTIONINGProps["$Section"] = forwardRef((props, ref) => (
  <nav {...props} ref={ref} />
));
export const Nav = forwardRef<HTMLElement, NavProps>((props, ref) => {
  return <SECTIONING $Section={Section} $Heading={Heading} {...props} ref={ref} />;
});
