import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { forwardRef } from "react";

export type DialogProps = ComponentPropsWithoutRef<"dialog"> & {
  children: ReactNode;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { children, ...restProps } = props;
    return (
      <dialog data-fx-dialog {...restProps} ref={ref}>
        <form method={"dialog"}>
          {children}
          <button>close</button>
        </form>
      </dialog>
    );
  }
);
