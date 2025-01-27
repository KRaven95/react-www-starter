import React from "react";
import useSessionStorage from "./useSessionStorage";

const useOnActivateTab = (callback: Function) => {
  const id = React.useId();
  const [canTrigger, setCanTrigger] = useSessionStorage(false, id);

  const activate = () => setCanTrigger(true);
  const deactivate = () => setCanTrigger(false);

  React.useEffect(() => {
    const onVisibilityChange = (e: Event) => {
      if (canTrigger) {
        callback();
        deactivate();
      } else {
        activate();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [canTrigger]);
};

export default useOnActivateTab;
