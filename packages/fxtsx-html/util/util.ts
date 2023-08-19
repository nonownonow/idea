import type { ForwardedRef, MutableRefObject } from "react";

export function setMultipleRef<T>(
  refs: (ForwardedRef<T> | MutableRefObject<T>)[]
) {
  return function (instance: T) {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref !== null) {
        ref.current = instance;
      }
    });
  };
}
