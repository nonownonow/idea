import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";
import React, { forwardRef } from "react";
import { map, partition, pipe, some, toArray } from "@fxts/core";
import type { FXTSXRenderFunction } from "../ fxtsx.type";

export function htmlChildren(html: ReactNode) {
  let result;
  if (typeof html === "string") {
    result = {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    };
  } else {
    result = {
      children: html,
    };
  }
  return result;
}

export function separateProps<P extends Record<string, any>>(
  props: P,
  rootPropsKeys: (string | RegExp)[] = [
    "className",
    "id",
    "tabIndex",
    "style",
    /data-.+/,
  ]
) {
  const rootPropsAndOtherProps = ([key]: string[]) =>
    pipe(
      rootPropsKeys,
      some((matcher) => RegExp(matcher).test(key))
    );

  return pipe(
    Object.entries(props),
    partition(rootPropsAndOtherProps),
    map(Object.fromEntries),
    toArray
  );
}

export const MockComponent = forwardRef((props: any, ref: any) => (
  <div {...props} ref={ref} />
));
/*
export declare function fxtsx<T, P extends HTMLElementProps = {}>(
  render: FXTSXRenderFunction<T, P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
*/
export function fxtsx<T, P extends Record<string, any>>(
  render: FXTSXRenderFunction<T, P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  return forwardRef<T, P>((props, ref) => {
    const [rootProps, restProps] = separateProps(props);
    return render(rootProps, restProps, ref);
  });
}
