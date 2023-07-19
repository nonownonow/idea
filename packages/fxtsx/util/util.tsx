import type { ReactNode } from "react";
import React, { forwardRef } from "react";
import { entries, filter, isString, map, nth, pipe } from "@fxts/core";
import { kebabCase } from "lodash";

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
/*
 * 고차 컴포넌트의 기본 콜백 콤포넌트 생성
 * */
export function ComponentWithRef(testId: string, description?: string) {
  return forwardRef<any, any>((props: any, ref: any) => {
    const { children, ...restProps } = pipe(
      entries(props),
      map(([k, v]) => [k === "className" ? k : kebabCase(k as string), v]),
      Object.fromEntries
    );
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
    const { children, ...restProps } = pipe(
      entries(props),
      filter((a) => pipe(a, nth(1), isString)),
      map(([k, v]) => [k === "className" ? k : kebabCase(k as string), v]),
      Object.fromEntries
    );
    return (
      <div data-testid={testId} {...restProps}>
        {description}
        {children}
      </div>
    );
  };
