import type { FC, ReactNode, Ref } from "react";
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
  Heading: FC<{
    data: HeadingProps["data"];
    level: HeadingProps["level"];
    ref: Ref<HTMLHeadingElement>;
  }>;
  Hgroup: FC<{
    children: ReactNode;
  }>;
}

/**
 * 헤딩(h1 ~ h6)태그와 대응하는 컴포넌트 구현을 위한 인터페이스*/
export const HEADING = forwardRef<HTMLHeadingElement, HEADINGProps>(function (
  { Heading, Hgroup, children, data, level, ...etcProps },
  ref
) {
  return children ? (
    <Hgroup data-fx-heading>
      <Heading data={data} level={level} ref={ref} />
      {children}
    </Hgroup>
  ) : (
    <Heading data-fx-heading data={data} level={level} ref={ref} />
  );
});
