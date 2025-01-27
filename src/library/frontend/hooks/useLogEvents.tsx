import { useEffect, useRef } from "react";
import useIsMounted from "./useIsMounted";

const allEvents = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "keydown",
  "keyup",
  "keypress",
  "focus",
  "blur",
  "change",
  "input",
  "submit",
  "scroll",
  "resize",
  "drag",
  "drop",
  "dragstart",
  "dragover",
  "dragleave",
  "dragend",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel"
];

const useLogEvents = <RefType extends HTMLElement>() => {
  const isMounted = useIsMounted();
  const ref = useRef<RefType | null>(null);
  const currentDiv = ref.current;

  const logEvent = (event: Event) => {
    console.log(`Event: ${event.type}`, event);
  };

  useEffect(() => {
    if (!currentDiv) return;

    allEvents.forEach((eventType) => {
      currentDiv.addEventListener(eventType, logEvent);
    });

    return () => {
      allEvents.forEach((eventType) => {
        currentDiv.removeEventListener(eventType, logEvent);
      });
    };
  }, [isMounted]);

  return { ref };
};

export default useLogEvents;
