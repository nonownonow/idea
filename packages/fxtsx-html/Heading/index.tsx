import type { ComponentPropsWithoutRef } from "react";
import React, { createElement, forwardRef } from "react";
import type { heading } from "fxtsx/HEADING";
import { HEADING } from "fxtsx/HEADING";
import { html } from "fxtsx/util";

export interface HeadingProps extends heading, ComponentPropsWithoutRef<"h1"> {}

const $Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { level = 1, data, children, ...etcProps } = props;
  return createElement(`h${level}`, {
    ...(children
      ? {
          children: (
            <>
              <div {...html(data)} /> {children}
            </>
          ),
        }
      : html(data)),
    ...etcProps,
    ref,
  });
});

/**
 * HTMLHeadingElement을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function (
  props,
  ref
) {
  return <HEADING {...props} ref={ref} Heading={$Heading} />;
});
