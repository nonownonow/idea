import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { createElement, forwardRef } from "react";
import type {
  HEADINGProps,
  HeadingProps as $HeadingProps,
} from "fxtsx/HEADING/HEADING";
import { HEADING } from "fxtsx/HEADING/HEADING";
import { html } from "fxtsx/util/util";

export interface HeadingProps
  extends $HeadingProps,
    ComponentPropsWithoutRef<"h1"> {
  /**
   * 헤딩의 내용. 문자 내부에 태그 사용 가능함.
   */
  data: string;
  /**
   * 헤딩그룹(hgroup)에 들어가는 헤딩(h1-h6)에 연관된 내용
   * */
  children?: ReactNode;
}

/*const $Heading = forwardRef<HTMLHeadingElement, $HeadingProps>((props, ref) => {
  const { level, data, children, ...etcProps } = props;
  return createElement(`h${level}`, {
    ...html(data),
    ...etcProps,
    ref,
  });
});*/
const $Heading: HEADINGProps["Heading"] = forwardRef(({ level, data }, ref) =>
  createElement(`h${level}`, { ...html(data), ref })
);

/*const $HGroup = forwardRef<HTMLHeadingElement, $HeadingProps>((props, ref) => {
  const { rootProps, nodeProps } = separateProps(props);
  const { level = 1, data, children, ...etcProps } = nodeProps;
  return (
    <hgroup {...rootProps}>
      <$Heading data={data} level={level} {...etcProps} ref={ref} />
      {children}
    </hgroup>
  );
});*/

const $Hgroup: HEADINGProps["Hgroup"] = (props) => <hgroup {...props} />;

/**
 * - [HTMLHeadingElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * - children이 존재하면 루트태그는 헤딩(h1 - h6)에서 헤딩그룹(hgroup)으로 교체됨
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function (
  props,
  ref
) {
  return <HEADING {...props} Heading={$Heading} Hgroup={$Hgroup} ref={ref} />;
});
