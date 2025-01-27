import { useEffect, useRef } from "react";
import useBoolean from "./useBoolean";

interface Props {
  callback: Function;
  timeoutAfterMs: number;
}

interface Return {
  startWaiting(): void;
  reset(): void;
  isWaiting: boolean;
}

const useCallbackAfterTimeout = ({ callback, timeoutAfterMs }: Props): Return => {
  const [isWaiting, startWaiting, stopWaiting] = useBoolean(false);
  const [isMechanismRunning, startMechanism, stopMechanism] = useBoolean(false);

  const timer = useRef<NodeJS.Timeout>();

  const executeCallback = () => {
    callback();
    resetTimer();
    stopWaiting();
  };

  const setTimer = () => {
    timer.current = setTimeout(executeCallback, timeoutAfterMs);
  };

  const resetTimer = () => {
    if (!!timer.current) {
      clearTimeout(timer.current);
    }
  };

  const reset = () => {
    resetTimer();
    stopWaiting();
    stopMechanism();
  };

  //auto reset
  useEffect(() => {
    if (isMechanismRunning) {
      stopMechanism();
    }
  }, [isMechanismRunning]);

  //starting timer
  useEffect(() => {
    if (isMechanismRunning) {
      setTimer();
    }
  }, [isMechanismRunning]);

  useEffect(() => {
    if (isMechanismRunning) {
      startWaiting();
    }
  }, [isMechanismRunning]);

  return { startWaiting: startMechanism, isWaiting, reset };
};

export default useCallbackAfterTimeout;
