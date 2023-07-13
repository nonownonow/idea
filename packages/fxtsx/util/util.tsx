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

export function ComponentWithRef<T, P = {}>(
  testId: string,
  description?: string
) {
  return forwardRef<T, P>((props: any, ref: any) => {
    const { children, ...restProps } = props;
    return (
      <div data-testid={testId} {...restProps} ref={ref}>
        {description}
        {children}
      </div>
    );
  });
}

export const ComponentWithoutRef =
  (testId: string, description?: string) => (props: any) => {
    const { children, ...restProps } = props;
    return (
      <div data-testid={testId} {...restProps}>
        {description}
        {children}
      </div>
    );
  };
