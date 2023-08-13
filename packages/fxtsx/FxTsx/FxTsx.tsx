import type { ForwardedRef, ReactElement, Ref, RefAttributes } from "react";
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

export interface FXTSXRenderFunction<
  T,
  P,
  ROOT = RootProps,
  REST = RestProps<P>
> {
  (rootProps: ROOT, restProps: REST, ref: ForwardedRef<T>): ReactElement | null;
}

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
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
export function Fxtsx<T, P>(render: FXTSXRenderFunction<T, P>) {
  return forwardRef<T, P>((props, ref) => {
    const [rootProps, restProps] = separateProps(
      props as Record<string, any>
    ) as [RootProps, RestProps<P>];
    return render(rootProps, restProps, ref);
  });
}
