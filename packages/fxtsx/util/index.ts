import DOMPurify from "isomorphic-dompurify";
import type { ReactNode } from "react";

export function html(html: ReactNode): {
  children?: ReactNode | undefined;
  dangerouslySetInnerHTML?:
    | {
        __html: string;
      }
    | undefined;
} {
  if (typeof html === "string") {
    return {
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize(html),
      },
    };
  }
  return {
    children: html,
  };
}
