import type {
  FC,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";

export type PieceComponent<T, P = {}> = T extends null
  ? FC<P & { children?: ReactNode }>
  : ForwardRefExoticComponent<
      PropsWithoutRef<P> & { children?: ReactNode } & RefAttributes<T>
    >;
/* : ForwardRefExoticComponent<
      PropsWithoutRef<P> & { children?: ReactNode } & RefAttributes<T>
    >;*/
