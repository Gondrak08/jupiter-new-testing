import { useEffect, useRef } from "react";

export function useDebounce<T>(
  action: () => void,
  value: T,
  delay?: number,
  disableInitAction: boolean = false,
  prevAction: () => void = () => {}
): void {
  const initLoad = useRef<boolean>(false);
  useEffect(() => {
    if (disableInitAction) {
      if (!initLoad.current) {
        initLoad.current = true;
        return;
      }
    }
    prevAction();
    const timer = setTimeout(() => {
      action();
    }, delay ?? 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
}
