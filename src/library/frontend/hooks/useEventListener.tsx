import { useEffect, useRef } from "react";

type EventListenerType = keyof WindowEventMap;

interface Options {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}

const defaultOptions: Options = {
  capture: false,
  passive: false,
  once: false
};

const useEventListener = <K extends EventListenerType>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options: Options | undefined = defaultOptions
): void => {
  const savedHandler = useRef<(event: WindowEventMap[K]) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const eventListener = (event: WindowEventMap[K]) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    window.addEventListener(eventName, eventListener, options);

    return () => {
      window.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, options]);
};

export default useEventListener;
