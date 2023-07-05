import type { ComponentPropsWithoutRef, FC, ReactNode, Ref } from "react";
import React, { forwardRef } from "react";
import { separateProps } from "../util/util";

export interface HeadingProps {
  /**
   * 헤딩의 내용.
   */
  title: string;
  /**
   * 헤딩의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}
export interface HEADINGProps
  extends HeadingProps,
    ComponentPropsWithoutRef<"div"> {
  /**
   * 헤딩을 구현하는 컨포넌트
   */
  Heading: FC<{
    title: HeadingProps["title"];
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
  { Heading, Hgroup, children, title, level, ...props },
  ref
) {
  const [rootProps, headingProps] = separateProps(props);
  return children ? (
    <Hgroup data-fx-heading {...rootProps}>
      <Heading title={title} level={level} {...headingProps} ref={ref} />
      {children}
    </Hgroup>
  ) : (
    <Heading data-fx-heading {...props} title={title} level={level} ref={ref} />
  );
});
