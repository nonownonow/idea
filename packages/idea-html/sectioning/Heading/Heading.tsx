import type { ComponentPropsWithoutRef } from "react";
import React, { forwardRef } from "react";
import { HEADING } from "packages/idea/HEADING/HEADING";
import { H } from "packages/idea-html/Value";

export type HeadingProps = HEADING & ComponentPropsWithoutRef<"h1">;

/**
 * - [HTMLHeadingElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * - children이 존재하면 루트태그는 헤딩(h1 - h6)에서 헤딩그룹(hgroup)으로 교체됨
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ $subTitle, children = $subTitle, ...props }, ref) {
    return (
      <HEADING
        {...props}
        $subTitle={children}
        Root={H}
        HeadingGroup={"hgroup"}
        ref={ref}
      />
    );
  }
);
