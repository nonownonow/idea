import type { FC, ReactNode } from "react";
import React, { createElement } from "react";
import { Fxtsx } from "../FxTsx/FxTsx";
import { Default } from "fxtsx/Identity/Default";
import type { HEADING } from "fxtsx/HEADING/HEADING";
import { htmlChildren } from "fxtsx/util/util";

export type SECTIONINGProps = SECTIONING & SECTIONINGCallback;
export type SECTIONING = HEADING & {
  /**
   * 현재 레벨의 내용
   */
  $contents?: ReactNode;
  /**
   * 하위 레벨의 내용
   */
  $lowerContents?: ReactNode;
  /**
   * = lowerContents 프로퍼티
   */
  children?: SECTIONING["$lowerContents"];
};

export type SECTIONINGCallback = {
  /**
   * [헤딩](http://localhost:6006/?path=/docs/fxtsx-html-sectioning-h--docs)을 구현하는 컴포넌트
   */
  Heading?: string | FC<any>;
  /**
   * 섹션을 구현하는 컨포넌트
   */
  Root?: string | FC<any>;
};

/**
 * 섹션(section) 태그와 대응하는 컴포넌트 구현을 위한 인터페이스
 * */
export const SECTIONING = Fxtsx<HTMLElement, SECTIONINGProps>(
  (rootProps, { children, ...restProps }, ref) => {
    const {
      Root = Default,
      Heading = Default,
      $title,
      $level,
      $subTitle,
      $lowerContents,
      $contents,
      ...sectionProps
    } = restProps;
    return createElement(
      Root,
      {
        "data-fx-sectioning": true,
        ...rootProps,
        ...sectionProps,
        ref,
      },
      <>
        {createElement(Heading, {
          "data-heading-level": $level,
          $title,
          ...htmlChildren($title),
          $level,
          $subTitle,
        })}
        {$contents && <div data-fx-sectioning-contents>{$contents}</div>}
        {children}
      </>
    );
  }
);

//todo: Fxtsx 내부에서 React.memo 를 이용하여 최적화 하기,
