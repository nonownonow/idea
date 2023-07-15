import type { FC, ReactNode, Ref } from "react";
import React from "react";

import { Fxtsx } from "../FxTsx/FxTsx";

export interface HEADINGProps {
  /**
   * 제목.
   */
  title: string;
  /**
   * 제목의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  /**
   * 제목을 구현하는 컨포넌트
   */
  $H: FC<{
    title: HEADINGProps["title"];
    level: HEADINGProps["level"];
    ref: Ref<HTMLHeadingElement>;
  }>;
  /**
   * 제목 그룹을 구현하는 컨포넌트
   */
  $Hgroup: FC<{
    children: HEADINGProps["children"];
  }>;
}

export type HeadingProps = Omit<HEADINGProps, "$H" | "$Hgroup">;
/**
 * 헤딩(h1 ~ h6)태그와 대응하는 컴포넌트 구현을 위한 인터페이스
 * */
export const HEADING = Fxtsx<HTMLHeadingElement, HEADINGProps>(function (
  rootProps,
  restProps,
  ref
) {
  const { $H, $Hgroup, children, ...headingProps } = restProps;
  return children ? (
    <$Hgroup data-fx-heading {...rootProps}>
      <$H {...headingProps} ref={ref} />
      {children}
    </$Hgroup>
  ) : (
    <$H data-fx-heading {...rootProps} {...headingProps} ref={ref} />
  );
});
