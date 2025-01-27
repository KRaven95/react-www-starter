import { useState, useEffect, useRef } from "react";

interface Listener {
  keys: string[];
  handler: () => void;
}

const useKeysSequence = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const listenersRef = useRef<Listener[]>([]);

  const addListener = (listener: Listener) => {
    listenersRef.current.push(listener);
  };

  const removeListener = (listener: Listener) => {
    listenersRef.current = listenersRef.current.filter((l) => l !== listener);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      setKeys((prevKeys) => [...prevKeys, key].slice(-3));

      listenersRef.current.forEach((listener) => {
        const lastKeys = keys.slice(-3);
        if (lastKeys.length === 3 && listener.keys.every((k, index) => k === lastKeys[index])) {
          listener.handler();
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keys]);

  return { keys, addListener, removeListener };
};

export default useKeysSequence;
