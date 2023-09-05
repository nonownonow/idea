/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
import type { ReactElement, ReactNode, Ref, RefAttributes } from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
}
declare module "react" {
  // @ts-ignore
  interface HTMLAttributes {
    children?: ReactNode | undefined;
  }
}
