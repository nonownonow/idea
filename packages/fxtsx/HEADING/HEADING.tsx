import type { FC, ReactNode, Ref } from "react";
import React from "react";

import { Fxtsx } from "../FxTsx/FxTsx";

export interface $HEADINGProps {
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

export interface HEADINGPiece {
  /**
   * 헤딩을 구현하는 컨포넌트
   */
  $Heading: FC<{
    title: $HEADINGProps["title"];
    level: $HEADINGProps["level"];
    ref: Ref<HTMLHeadingElement>;
  }>;
  $Hgroup: FC<{
    children: $HEADINGProps["children"];
  }>;
}

export type HEADINGProps = $HEADINGProps & HEADINGPiece;
/**
 * 헤딩(h1 ~ h6)태그와 대응하는 컴포넌트 구현을 위한 인터페이스
 * */
export const HEADING = Fxtsx<HTMLHeadingElement, HEADINGProps>(function (
  rootProps,
  restProps,
  ref
) {
  const { $Heading, $Hgroup, children, ...headingProps } = restProps;
  return children ? (
    <$Hgroup data-fx-heading {...rootProps}>
      <$Heading {...headingProps} ref={ref} />
      {children}
    </$Hgroup>
  ) : (
    <$Heading data-fx-heading {...rootProps} {...headingProps} ref={ref} />
  );
});
