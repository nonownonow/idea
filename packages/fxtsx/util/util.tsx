import type { ReactNode } from "react";
import React from "react";
import { map, partition, pipe, some, toArray } from "@fxts/core";

export function htmlChildren(html: ReactNode) {
  let result;
  if (typeof html === "string") {
    result = {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    };
  } else {
    result = {
      children: html,
    };
  }
  return result;
}

export const separateProps = <T extends Record<string, any>>(
  props: T,
  rootPropsKeys: (string | RegExp)[] = [
    "className",
    "id",
    "tabIndex",
    "style",
    /data-.+/,
  ]
) => {
  const rootPropsAndOtherProps = ([key]: string[]) =>
    pipe(
      rootPropsKeys,
      some((matcher) => RegExp(matcher).test(key))
    );

  return pipe(
    Object.entries(props),
    partition(rootPropsAndOtherProps),
    map(Object.fromEntries),
    toArray
  );
};

export const MockComponent = (props: any) => <div {...props} />;
