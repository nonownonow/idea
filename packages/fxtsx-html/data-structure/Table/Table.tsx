import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DATAFRAME } from "fxtsx/DATAFRAME/DATAFRAME";
import { Tr } from "fxtsx-html/data-structure/Tr/Tr";
import { LIST } from "fxtsx/LIST/LIST";

export const Table = forwardRef(function Table(
  props: DATAFRAME<any>,
  ref: ForwardedRef<HTMLTableCellElement>
) {
  const { $data = [], ...tableProps } = props;
  return (
    <DATAFRAME
      data-fx-table
      List={(props) => (
        <LIST
          {...props}
          List={({ children, ref, ...props }) => (
            <table {...props}>
              <thead>
                <Tr $data={$data[0]} isHeader={true} />
              </thead>
              <tbody>{children}</tbody>
            </table>
          )}
          Item={(props) => <>{props.children}</>}
        />
      )}
      Dictionary={Tr}
      {...tableProps}
      $data={$data}
      ref={ref}
    />
  );
});
