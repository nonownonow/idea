import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { forwardRef } from "react";
import { htmlChildren } from "fxtsx/util/util";

export type DialogProps = ComponentPropsWithoutRef<"dialog"> & {
  $closeButtonLabel?: ReactNode;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { children, $closeButtonLabel = "close", ...restProps } = props;
    return (
      <dialog data-fx-dialog {...restProps} ref={ref}>
        <form method={"dialog"}>
          {children}
          <button {...htmlChildren($closeButtonLabel)} />
        </form>
      </dialog>
    );
  }
);
