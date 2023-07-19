import type { ComponentPropsWithoutRef } from "react";
import React, { createElement, forwardRef } from "react";
import { htmlChildren } from "fxtsx/util/util";
import type { Callback } from "fxtsx/fxtsx.type";
import { HEADING } from "fxtsx/HEADING/HEADING";

export type HProps = HEADING & ComponentPropsWithoutRef<"h1">;

export const $Heading: Callback["$Headline"] = forwardRef(
  ({ level, title }, ref) =>
    createElement(`h${level}`, { ...htmlChildren(title), ref })
);

export const $HeadingGroup: Callback["$HeadlineGroup"] = (props) => (
  <hgroup {...props} />
);

/**
 * - [HTMLHeadingElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * - children이 존재하면 루트태그는 헤딩(h1 - h6)에서 헤딩그룹(hgroup)으로 교체됨
 */
export const H = forwardRef<HTMLHeadingElement, HProps>(function Heading(
  props,
  ref
) {
  return (
    <HEADING
      {...props}
      $Headline={$Heading}
      $HeadlineGroup={$HeadingGroup}
      ref={ref}
    />
  );
});
