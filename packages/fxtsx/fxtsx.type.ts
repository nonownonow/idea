import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";
import type { HEADINGCallback } from "fxtsx/HEADING/HEADING";
import type { SECTIONINGCallback } from "fxtsx/SECTIONING/SECTIONING";

export type HTMLElementProps = ComponentPropsWithoutRef<"div">;
export interface RootProps {
  id?: string;
  className?: string;
  tabIndex?: number;
  style?: CSSProperties;
  children?: ReactNode;
  [k: `data-${string}`]: string;
}

export type FFC<T, P = {}> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

export interface Callback extends HEADINGCallback, SECTIONINGCallback {}
export type WithoutCallback<T> = Pick<
  T,
  {
    [K in keyof T]: K extends `$${string}` & "children" ? K : never;
  }[keyof T]
>;

export type Dataset = { [key: `data-${string}`]: boolean };
