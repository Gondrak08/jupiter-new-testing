import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export const useOutsideClick = (
  callback: () => void,
  active: boolean
): RefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current !== null && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, active]);

  return ref;
};
