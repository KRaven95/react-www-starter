import { useEffect } from "react";

const useWindowEvent = <TEvents extends string>(eventName: TEvents, callback: () => any) => {
  const handleMessage = (e: MessageEvent) => {
    if (e.data === eventName) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};

export default useWindowEvent;
