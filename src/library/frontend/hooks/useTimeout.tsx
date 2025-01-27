import { useEffect, useRef } from "react";

function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>();

  // Store the latest callback in the ref.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // Do nothing if delay is null
    if (delay === null) return;

    const timeoutId = setTimeout(() => {
      savedCallback.current?.();
    }, delay);

    // Clear the timeout on cleanup
    return () => clearTimeout(timeoutId);
  }, [delay]);
}

export default useTimeout;
