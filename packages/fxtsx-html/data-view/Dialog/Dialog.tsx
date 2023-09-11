import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { forwardRef } from "react";
import { htmlChildren } from "fxtsx/util/util";
import { Button } from "fxtsx-html/Value/Button/Button";

export type DialogProps = ComponentPropsWithoutRef<"dialog"> & {
  $closeButtonLabel?: ReactNode;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { children, $closeButtonLabel = "close", ...restProps } = props;
    return (
      <dialog data-fx-dialog {...restProps} ref={ref} style={{ zIndex: 9999 }}>
        <form method={"dialog"}>
          {children}
          <Button {...htmlChildren($closeButtonLabel)} />
        </form>
      </dialog>
    );
  }
);
