import type { ComponentPropsWithoutRef } from "react";
import React, { createElement, forwardRef } from "react";
import type { $HEADINGProps, HEADINGProps } from "fxtsx/HEADING/HEADING";
import { HEADING } from "fxtsx/HEADING/HEADING";
import { htmlChildren } from "fxtsx/util/util";

export type HeadingProps = $HEADINGProps & ComponentPropsWithoutRef<"h1">;

export const $Heading: HEADINGProps["$Heading"] = forwardRef(
  ({ level, title }, ref) =>
    createElement(`h${level}`, { ...htmlChildren(title), ref })
);

export const $Hgroup: HEADINGProps["$Hgroup"] = (props) => (
  <hgroup {...props} />
);

/**
 * - [HTMLHeadingElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * - children이 존재하면 루트태그는 헤딩(h1 - h6)에서 헤딩그룹(hgroup)으로 교체됨
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    // 콜백 컴포넌트를 전달받아서 가상돔을 반환한다.
    return (
      <HEADING {...props} $Heading={$Heading} $Hgroup={$Hgroup} ref={ref} />
    );
  }
);
