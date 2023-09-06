import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY2/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { Identity, Noop } from "fxtsx/util/util";
import { Th } from "fxtsx-html/Value/Th";
import { Td } from "fxtsx-html/Value/Td/Td";
import type { DicData } from "fxtsx/fxtsx.type";

export type TrProps = DICTIONARY<DicData> & { isHeader?: boolean };
export const Tr = forwardRef(function Tr(
  props: TrProps,
  ref: ForwardedRef<HTMLTableRowElement>
) {
  const { isHeader = false, ...restProps } = props;
  return (
    <DICTIONARY
      data-fx-tr
      ref={ref}
      {...restProps}
      Root={"tr"}
      Entry={(props) => (
        <ENTRY
          Root={Identity}
          Key={isHeader ? Th : Noop}
          Value={isHeader ? Noop : Td}
          {...props}
        />
      )}
    />
  );
});
