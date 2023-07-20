import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { SECTIONING } from "fxtsx/SECTIONING/SECTIONING";

export type AsideProps = SECTIONING & ComponentPropsWithoutRef<"aside">;
export const Aside = function Aside(props: AsideProps) {
  return <SECTIONING {...props} />;
};
