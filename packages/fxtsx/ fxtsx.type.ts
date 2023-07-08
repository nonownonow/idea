import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ForwardedRef,
  ReactElement,
} from "react";

export type HTMLElementProps = ComponentPropsWithoutRef<"div">;
export interface RootElementProps {
  id?: string;
  className?: string;
  tabIndex?: number;
  style?: CSSProperties;
  [k: `data-${string}`]: string;
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
