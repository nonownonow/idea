import type { FC, ReactNode, Ref } from "react";
import React from "react";
import type { HEADING } from "../HEADING/HEADING";
import { Fxtsx } from "../FxTsx/FxTsx";
import { ComponentWithoutRef, ComponentWithRef } from "fxtsx/util/util";

export type SECTIONINGProps = SECTIONING & SECTIONINGCallback;
export interface SECTIONING extends HEADING {
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
}

export type SECTIONINGCallback = {
  /**
   * [헤딩](http://localhost:6006/?path=/docs/fxtsx-html-sectioning-h--docs)을 구현하는 컴포넌트
   */
  Heading?: FC<HEADING>;
  /**
   * 섹션을 구현하는 컨포넌트
   */
  Sectioning?: FC<{
    children?: SECTIONINGProps["children"];
    ref: Ref<HTMLElement>;
  }>;
};

const MockSectioning = ComponentWithRef("$Sectioning");
const MockHeading = ComponentWithoutRef("$Heading");
/**
 * 섹션(section) 태그와 대응하는 컴포넌트 구현을 위한 인터페이스
 * */
export const SECTIONING = Fxtsx<HTMLElement, SECTIONINGProps>(
  (rootProps, restProps, ref) => {
    const {
      Sectioning = MockSectioning,
      Heading = MockHeading,
      $title,
      $level,
      $subTitle,
      $lowerContents,
      children,
      $contents,
      ...sectionProps
    } = restProps;
    return (
      <Sectioning data-fx-sectioning {...rootProps} {...sectionProps} ref={ref}>
        <Heading $title={$title} $level={$level} $subTitle={$subTitle} />
        {$contents && <div data-fx-sectioning-contents>{$contents}</div>}
        {children}
      </Sectioning>
    );
  }
);

//todo: Fxtsx 내부에서 React.memo 를 이용하여 최적화 하기,
