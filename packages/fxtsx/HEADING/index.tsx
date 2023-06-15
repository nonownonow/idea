import type { FC, ReactNode } from "react";
import React, { forwardRef } from "react";

export interface HeadingProps {
  /**
   * 헤딩의 내용.
   */
  data: string;
  /**
   * 헤딩의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}
export interface HEADINGProps extends HeadingProps {
  /**
   * 헤딩을 구현하는 컨포넌트
   */
  Heading?: FC<{ data: HeadingProps["data"]; level: HeadingProps["level"] }>;
}

export const ComponentWithRef = (props: any) => <div {...props} />;
/**
 * 헤딩(h1 ~ h6)태그와 대응하는 컴포넌트 구현을 위한 인터페이스*/
export const HEADING = forwardRef<HTMLHeadingElement, HEADINGProps>(function (
  { Heading = ComponentWithRef, ...etcProps },
  ref
) {
  return <Heading data-heading {...etcProps} {...{ ref }} />;
});
