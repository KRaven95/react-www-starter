import { useEffect, useRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(callback: () => void): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: AnyEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
