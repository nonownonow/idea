import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { DATAFRAME } from "packages/idea/DATAFRAME/DATAFRAME";
import { Tr } from "packages/idea-html/data-structure/Tr/Tr";
import { COLLECTION } from "packages/idea/COLLECTION/COLLECTION";

export const Table = forwardRef(function Table(
  props: DATAFRAME<any>,
  ref: ForwardedRef<HTMLTableCellElement>
) {
  const { $data = [], ...tableProps } = props;
  return (
    <DATAFRAME
      data-fx-table
      Root={(props) => (
        <COLLECTION
          {...props}
          Root={({ children, ref, ...props }) => (
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
