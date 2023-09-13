import type { ComponentPropsWithoutRef, ReactNode } from "react";
import React, { forwardRef, useRef } from "react";
import { htmlChildren } from "fxtsx/util/util";
import { Button } from "fxtsx-html/Value/Button/Button";
import { setMultipleRef } from "fxtsx-html/util/util";

export type DialogProps = Omit<ComponentPropsWithoutRef<"dialog">, "open"> & {
  $closeButtonLabel?: ReactNode;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { children, $closeButtonLabel = "close", ...restProps } = props;
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <Button
          $url={"./#open2"}
          onClick={(e) => {
            e.preventDefault();
            dialogRef.current?.showModal();
          }}
        >
          open
        </Button>
        <dialog
          data-fx-dialog
          {...restProps}
          ref={setMultipleRef([ref, dialogRef])}
          style={{ zIndex: 9999 }}
        >
          <form method={"dialog"}>
            {children}
            <Button
              onClick={(e) => dialogRef.current?.close()}
              {...htmlChildren($closeButtonLabel)}
            />
          </form>
        </dialog>
      </>
    );
  }
);
