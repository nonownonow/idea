import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";
import { map, partition, pipe, some, toArray } from "@fxts/core";
import type { RootProps } from "../fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";

export function separateProps<P extends Record<string, any>>(
  props: P,
  rootPropsKeys: (string | RegExp)[] = [
    "className",
    "tabIndex",
    "style",
    "children",
    "hidden",
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
  ) as [RootProps, RestProps<P>];
}

export interface FXTSXRenderFunction<
  T,
  P,
  ROOT = RootProps,
  REST = RestProps<P>
> {
  (rootProps: ROOT, restProps: REST, ref: ForwardedRef<T>): ReactElement | null;
}

export const rootProps: RootProps = {
  id: "my-id",
  className: "my-class",
  tabIndex: 0,
  style: {
    fontSize: "1rem",
  },
  "data-test": "my-data-test",
};
export const anyPropsWithRootProps = {
  ...rootProps,
  any: "my-any-props",
};
export function Fxtsx<T, P extends Record<string, any>>(
  render: FXTSXRenderFunction<T, P>
) {
  //forwardRef 는 render 함수에서 타입 추론이 가능하도록 재정의 됨
  return forwardRef<T, P>((props, ref) => {
    const [rootProps, restProps] = separateProps<P>(props);
    return render(rootProps, restProps, ref);
  });
}
