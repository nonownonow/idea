import type { FC, ReactNode } from "react";
import { createElement } from "react";

import { Fxtsx } from "../FxTsx/FxTsx";
import { Default } from "packages/idea/Identity/Default";
import { VALUE } from "packages/idea/VALUE/VALUE";
import type { H } from "packages/idea-html/Value";

export type HEADINGProps = HEADING &
  HEADINGCallback & {
    /**
     * =subTitle 프로퍼티
     */
    children?: ReactNode;
  };
//$접두사를 이용해서 fxtsx 프로퍼티의 고유한 이름을 보장한다.
export interface HEADING extends H {
  /**
   * 제목
   */
  $subTitle?: ReactNode;
}

export type HEADINGCallback = {
  /**
   * 제목을 구현하는 컨포넌트
   */
  Root?: string | FC<any>;
  /**
   * 제목 그룹을 구현하는 컨포넌트
   */
  HeadingGroup?: string | FC<any>;
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
    Root = VALUE,
    HeadingGroup = Default,
    children,
    $subTitle,
    $level,
    ...headingProps
  } = restProps;
  return $subTitle
    ? createElement(
        HeadingGroup,
        {
          ...rootProps,
          ref,
        },
        <>
          <Root data-fx-heading {...headingProps} ref={ref} key={"0"} />
          {$subTitle}
        </>
      )
    : createElement(Root, {
        "data-fx-heading": true,
        "data-heading-level": $level,
        ...rootProps,
        ...headingProps,
        ref,
      });
});
