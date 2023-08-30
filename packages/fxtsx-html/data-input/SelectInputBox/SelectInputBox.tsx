import React from "react";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { Checkbox } from "fxtsx-html/data-input/InputBox/Checkbox/Checkbox";
import { Ul } from "fxtsx-html/data-structure/Ul/Ul";

// export type TextFieldProps =
/*export type SelectInputBoxProps = Omit<LIST, "$data"> & {
  $data: Record<string, string>;
  $key: string;
  $valueFormats: {
    [key: string]: ((key: string, index: number) => ReactNode) | string;
  };
};*/

const Option = (props: ENTRY) => <ENTRY {...props} />;
export const SelectInputBox = function SelectInputBox(props: any) {
  const { $key, value, ...restProps } = props;
  /* todo: List -> Dictionary
   * Dictionary = 'fieldset'  ul, li조합이 아니라 fieldset 과 체크박스를 직접 조합한다. 순서는 keys로 제어하는 Dictionary구조를 차용
   * Entry -> Option
   * */
  return (
    <DICTIONARY
      {...restProps}
      Root={Ul}
      Entry={(p) => (
        <ENTRY
          Entry={(p) => <>{p.children}</>}
          Key={(p) => null}
          Value={({ children, ...p }) => (
            <Checkbox $label={children} name={$key} value={value} {...p} />
          )}
          {...p}
        />
      )}
    />
  );
};
