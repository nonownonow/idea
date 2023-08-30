import type { FC, ReactNode, Ref } from "react";
import React from "react";

import { Fxtsx } from "../FxTsx/FxTsx";
import { Component } from "fxtsx/util/util";

export type HEADINGProps = HEADING & HEADINGCallback;
//$접두사를 이용해서 fxtsx 프로퍼티의 고유한 이름을 보장한다.
export interface HEADING {
  /**
   * 제목
   */
  $title: string;
  /**
   * 제목의 레벨
   */
  $level: number;
  /**
   * 부제목
   */
  $subTitle?: ReactNode;
  /**
   * =subTitle 프로퍼티
   */
  children?: HEADINGProps["$subTitle"];
}

export type HEADINGCallback = {
  /**
   * 제목을 구현하는 컨포넌트
   */
  Headline?: FC<{
    $title: HEADING["$title"];
    $level: HEADING["$level"];
    ref: Ref<HTMLHeadingElement>;
  }>;
  /**
   * 제목 그룹을 구현하는 컨포넌트
   */
  HeadlineGroup?: FC<{
    children: HEADING["children"];
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
    Headline = Component("Headline"),
    HeadlineGroup = Component("HeadlineGroup"),
    children,
    $subTitle = children,
    ...headingProps
  } = restProps;
  return $subTitle ? (
    <HeadlineGroup data-fx-heading {...rootProps}>
      <Headline {...headingProps} ref={ref} />
      {$subTitle}
    </HeadlineGroup>
  ) : (
    <Headline data-fx-heading {...rootProps} {...headingProps} ref={ref} />
  );
});
