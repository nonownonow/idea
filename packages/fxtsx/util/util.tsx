import type { ReactNode, ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { entries, map, pipe } from "@fxts/core";
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

//todo: Component 로 이름 바꾸기
//todo: ComponentWithoutRef에  testId없는 경우도 체크하기
/*
 * 고차 컴포넌트의 기본 콜백 콤포넌트 생성
 * */
export function Component(testId: string, description?: string) {
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

export const CbComponent = (testId: string) =>
  jest.fn((p) => <div data-testid={testId} children={p.children} />);

export function Identity(p: ComponentPropsWithoutRef<"div">) {
  return <>{p.children}</>;
}

export function Noop() {
  return null;
}
