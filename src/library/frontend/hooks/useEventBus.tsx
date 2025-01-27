import { useEffect, useState } from "react";

export interface Events<T> {
  event: T | undefined;
  publish: (event: T) => void;
}

const useEventBus = <T,>(): Events<T> => {
  const [events, setEvents] = useState<T[]>([]);

  const publish = (event: T) => {
    setEvents((prev) => [...prev, event]);
  };

  const [event] = events;

  useEffect(() => {
    if (!event) return;

    setEvents((prev) => prev.filter((_, index) => index !== 0));
  }, [event]);

  return { event, publish };
};

export default useEventBus;
