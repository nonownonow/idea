import React, { forwardRef, useState } from "react";
import type { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";
import { useOutsideClick } from "fxtsx-html/util/hooks";
import { setMultipleRef } from "fxtsx-html/util/util";
import "./DropDown.css";
// export type DropDownProps =

export const DropDown = forwardRef(function DropDown(
  props: COLLECTION<any>,
  ref
) {
  const { $data, ...restProps } = props;
  const label = ["네이버", "구글", "페이스북"];
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useOutsideClick<HTMLElement>(() => {
    setIsOpen(false);
  });

  return (
    <nav
      {...restProps}
      ref={setMultipleRef([ref, rootRef])}
      data-fx-dropdown
      data-open={isOpen ? true : null}
    >
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>메뉴</button>
      <Ul
        $data={$data}
        $itemFormat={(a, i) => (
          <a href={a} target={"_blank"} rel="noreferrer">
            {label[i]}
          </a>
        )}
      />
    </nav>
  );
});
