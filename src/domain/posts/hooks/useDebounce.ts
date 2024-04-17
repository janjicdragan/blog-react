import { useState, useEffect, useCallback } from 'react';

export function useDebounce<T>(delay: number = 300) {
  const [timer, setTimer] = useState<number | undefined>();

  const debounce = useCallback(
    (callback: (value: T) => void, value: T) => {
      if (timer) clearTimeout(timer);

      const newTimer = setTimeout(() => {
        callback(value);
      }, delay);

      setTimer(newTimer);
    },
    [delay, timer],
  );

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return { debounce };
}
