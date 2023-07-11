import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export type HTMLElementProps = ComponentPropsWithoutRef<"div">;
export interface RootElementProps {
  id?: string;
  className?: string;
  tabIndex?: number;
  style?: CSSProperties;
  [k: `data-${string}`]: string;
}

export type FFC<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;
