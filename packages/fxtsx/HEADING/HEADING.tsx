import type { FC, ReactNode, Ref } from "react";
import React from "react";

import { Fxtsx } from "../FxTsx/FxTsx";
import { ComponentWithoutRef, ComponentWithRef } from "fxtsx/util/util";

export type HEADINGProps = HEADING & HEADINGCallback;
export interface HEADING {
  /**
   * 제목
   */
  title: string;
  /**
   * 제목의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 부제목
   */
  subTitle?: ReactNode;
  /**
   * =subTitle 프로퍼티
   */
  children?: HEADINGProps["subTitle"];
}

export type HEADINGCallback = {
  /**
   * 제목을 구현하는 컨포넌트
   */
  $H?: FC<{
    title: HEADINGProps["title"];
    level: HEADINGProps["level"];
    ref: Ref<HTMLHeadingElement>;
  }>;
  /**
   * 제목 그룹을 구현하는 컨포넌트
   */
  $Hgroup?: FC<{
    children: HEADINGProps["children"];
  }>;
};

/**
 * 헤딩(h1 ~ h6)태그와 대응하는 컴포넌트 구현을 위한 인터페이스
 * */
export const HEADING = Fxtsx<HTMLHeadingElement, HEADINGProps>(function (
  rootProps,
  restProps,
  ref
) {
  const {
    $H = ComponentWithRef<HTMLHeadingElement>("$H"),
    $Hgroup = ComponentWithoutRef("$Hgroup"),
    children,
    subTitle = children,
    ...headingProps
  } = restProps;
  return children ? (
    <$Hgroup data-fx-heading {...rootProps}>
      <$H {...headingProps} ref={ref} />
      {subTitle}
    </$Hgroup>
  ) : (
    <$H data-fx-heading {...rootProps} {...headingProps} ref={ref} />
  );
});
