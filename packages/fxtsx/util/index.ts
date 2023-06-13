import DOMPurify from "isomorphic-dompurify";
import type { ReactNode } from "react";

export function html(html: ReactNode): {
  children?: ReactNode | undefined;
  dangerouslySetInnerHTML?:
    | {
        __html: string;
      }
    | undefined;
} {
  if (typeof html === "string") {
    return {
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize(html),
      },
    };
  }
  return {
    children: html,
  };
}

const defaultRootPropsKeys = [
  "className",
  "id",
  "tabIndex",
  "style",
  /data-.+/,
];

export function separateProps<T>(props: T, rootPropsKeys: string[] = []) {
  const nodeProps: Record<string, any> = {};
  const rootProps: Record<string, any> = {};
  for (const key in props) {
    if (
      [...rootPropsKeys, ...defaultRootPropsKeys].findIndex((a) =>
        RegExp(a).test(key)
      ) > -1
    ) {
      rootProps[key] = props[key];
    } else {
      nodeProps[key] = props[key];
    }
  }
  return { rootProps, nodeProps };
}
