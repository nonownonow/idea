import type { FC, ForwardedRef, ReactNode, Ref } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";
import type { RootProps } from "fxtsx/fxtsx.type";
import type { RestProps } from "fxtsx/LIST/LIST";

export type DICTIONARYProps<T> = {
  Dictionary: FC<{ ref: Ref<T> }>;
  Entry: FC<{ children: ReactNode }>;
  Key: FC;
  Value: FC;
  children: ReactNode;
  data: Record<string, any>;
};

export const DICTIONARY = Fxtsx(function DICTIONARY<T>(
  rootProps: RootProps,
  restProps: RestProps<DICTIONARYProps<T>>,
  ref: ForwardedRef<T>
) {
  const { Dictionary, Entry, data, ...dictionaryProps } = restProps;
  // const entries = useMemo(() => Object.entries(data), [data]);
  return (
    <Dictionary
      data-fx-dictionary
      {...rootProps}
      {...dictionaryProps}
      ref={ref}
    />
  );
  /*  return (
    <Dictionary
      data-fx-dictionary
      {...rootProps}
      {...dictionaryProps}
      ref={ref}
    >
      <LIST data={entries} formatter={([k,v])=><Entry>{k}{v}</Entry>}/>
    </Dictionary>
  );*/
});
