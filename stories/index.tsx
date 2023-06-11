import type { ForwardedRef, ReactNode } from "react";
import React, { forwardRef } from "react";
import { PieceComponent } from "fxtsx/fxtsx.type";

export interface heading {
  /**
   * 헤딩의 내용, 내부적으로 dangerouslySetInnerHTML을 이용하기 때문에 문자열 태그 입력이 가능하다.
   */
  data: ReactNode;
  /**
   * 헤딩의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HEADINGProps extends heading {
  /**
   * 헤딩을 구현하는 컨포넌트
   */
  Heading?: PieceComponent<HTMLHeadingElement, heading>;
  /**
   * Heading 의 children
   */
  children?: ReactNode;
}

function $HEADING(
  {
    Heading = forwardRef((props, ref) => <div {...props} ref={ref} />),
    ...etcProps
  }: HEADINGProps,
  ref: ForwardedRef<HTMLHeadingElement>
) {
  return <Heading {...etcProps} ref={ref} />;
}

export const HEADING = forwardRef($HEADING);
