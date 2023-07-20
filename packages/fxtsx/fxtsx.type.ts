import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import type { HEADINGCallback } from "fxtsx/HEADING/HEADING";
import type { SECTIONCallback } from "fxtsx/SECTIONING/SECTIONING";

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

export interface Callback extends HEADINGCallback, SECTIONCallback {}
export type WithoutCallback<T> = Pick<
  T,
  {
    [K in keyof T]: K extends `$${string}` & "children" ? K : never;
  }[keyof T]
>;
