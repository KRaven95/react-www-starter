import React from "react";
import useBoolean from "./useBoolean";
import useEventListener from "./useEventListener";
import useKeyboard from "./useKeyboard";
import useKeysSequence from "./useKeysSequence";

const useFullscreen = () => {
  const [isInFullScreen, enterFullScreen, escapeFullscreen] = useBoolean(false);

  useEventListener("fullscreenchange" as any, () => console.log("fullscreen"));

  const keysSequence = useKeysSequence();

  keysSequence.addListener({ keys: ["a", "b", "c"], handler: () => console.log("match") });

  return { isInFullScreen };
};

export default useFullscreen;
