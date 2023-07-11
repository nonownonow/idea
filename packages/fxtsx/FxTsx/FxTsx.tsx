import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardedRef,
  ReactElement,
} from "react";
import { forwardRef } from "react";
import { map, partition, pipe, some, toArray } from "@fxts/core";
import type { RootElementProps } from "../ fxtsx.type";

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

export interface FXTSXRenderFunction<
  T,
  P,
  RootProps = RootElementProps,
  RestProps = Omit<P, keyof RootElementProps>
> {
  (
    rootProps: RootProps,
    restProps: RestProps,
    ref: ForwardedRef<T>
  ): ReactElement | null;
}

export function Fxtsx<T, P extends Record<string, any>>(
  render: FXTSXRenderFunction<T, P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  return forwardRef<T, P>((props, ref) => {
    const [rootProps, restProps] = separateProps(props);
    return render(rootProps, restProps, ref);
  });
}
