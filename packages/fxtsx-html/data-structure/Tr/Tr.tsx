import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { LIST } from "fxtsx/LIST/LIST";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

export type TrProps = DICTIONARY & { isHeader?: boolean };
export const Tr = forwardRef(function Tr(
  props: TrProps,
  ref: ForwardedRef<HTMLTableRowElement>
) {
  const { isHeader = false, ...restProps } = props;
  return (
    <DICTIONARY
      data-fx-tr
      {...restProps}
      List={(p) => (
        <LIST
          {...p}
          List={(p) => <tr {...p} ref={ref} />}
          Item={(p) => <>{p.children}</>}
        />
      )}
      Entry={(props) => (
        <ENTRY
          Entry={(p) => <>{p.children}</>}
          Key={isHeader ? "th" : () => null}
          Value={isHeader ? () => null : "td"}
          {...props}
        />
      )}
    />
  );
});
