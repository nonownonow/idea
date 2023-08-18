import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";

export interface VALUE {
  /**
   * 값
   * */
  $data: string;
  /**
   * 값의 설명
   * */
  $label: string;
}
export interface VALUECallback {
  /**
   * 값의 시각화
   * */
  Value: {
    children: ReactNode;
  };
}
export type FigureProps = VALUE & ComponentPropsWithoutRef<"figure">;
/**
 * The Figure with Optional Caption element
 * - VALUE 인터페이스를 구현함
 * - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * */
export const Figure = function Figure(props: FigureProps) {
  const { $data, children, $label, ...restProps } = props;
  return (
    <figure id={$data} {...restProps}>
      {children}
      <figcaption>{$label}</figcaption>
    </figure>
  );
};
