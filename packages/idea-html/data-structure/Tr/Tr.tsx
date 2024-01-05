import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DICTIONARY } from "packages/idea/DICTIONARY/DICTIONARY";
import { ENTRY } from "packages/idea/ENTRY/ENTRY";
import { Identity, Noop } from "packages/idea/util/util";
import { Th } from "packages/idea-html/Value/Th";
import { Td } from "packages/idea-html/Value/Td/Td";
import type { DicData } from "packages/idea/fxtsx.type";

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
