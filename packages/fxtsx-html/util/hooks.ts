import { useEffect, useRef } from "react";

export function useOutsideClick<El extends HTMLElement>(callback: () => void) {
  const ref = useRef<El>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return ref;
}
