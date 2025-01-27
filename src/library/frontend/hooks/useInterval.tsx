import { useEffect, useRef } from "react";

function useInterval(callback: () => void, intervalMs: number | null): void {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    // Don't do anything if the delay is null
    if (intervalMs === null) return;

    const tick = () => {
      savedCallback.current?.();
    };

    const id = setInterval(tick, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);
}

export default useInterval;
