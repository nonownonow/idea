import React from "react";

// export type TextFieldProps =
/*export type SelectInputBoxProps = Omit<LIST, "$data"> & {
  $data: Record<string, string>;
  $key: string;
  $valueFormats: {
    [key: string]: ((key: string, index: number) => ReactNode) | string;
  };
};*/

/*export const SelectInputBox = function SelectInputBox(
  props: SelectInputBoxProps
) {
  const { $key, $data, ...restProps } = props;
  return (
    <Ol
      data-fx-select-box
      $data={Object.entries($data)}
      $itemFormat={(v, k) => <Checkbox $value={v} name={$key} $label={k} />}
      {...restProps}
    />
  );
};*/
export const SelectInputBox = function SelectInputBox(props: any) {
  return <div {...props} />;
};
