import type { ReactNode } from "react";
import React, { forwardRef } from "react";

export function htmlChildren(html: ReactNode) {
  let result;
  if (typeof html === "string") {
    result = {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    };
  } else {
    result = {
      children: html,
    };
  }
  return result;
}

export function ComponentWithRef<T, P = {}>(testId: string) {
  return forwardRef<T, P>((props: any, ref: any) => (
    <div data-testid={testId} {...props} ref={ref} />
  ));
}

export function ComponentWithoutRef(testId: string) {
  return (props: any) => <div data-testid={testId} {...props} />;
}
