import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { forwardRef } from "react";
import { htmlChildren } from "packages/idea/util/util";
import "./Details.css";

export type DetailsProps = {
  $summary: ReactNode;
  $openMark?: ReactNode;
  $closeMark?: ReactNode;
} & ComponentPropsWithoutRef<"details">;

export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
  function TextField(props, ref) {
    const {
      $summary,
      $openMark = "+",
      $closeMark = "-",
      children,
      ...restProps
    } = props;
    return (
      <details data-fx-details {...restProps} ref={ref}>
        <summary>
          <span {...htmlChildren($summary)} />
          <span data-details-open-mark {...htmlChildren($openMark)} />
          <span data-details-close-mark {...htmlChildren($closeMark)} />
        </summary>
        {children}
      </details>
    );
  }
);
