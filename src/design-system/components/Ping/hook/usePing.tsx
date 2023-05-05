import React from "react";
import useBoolean from "src/design-system/hooks/useBoolean";

interface UsePingProps {
  duration: number | "infinite";
  color: React.CSSProperties["color"];
}

interface UsePingResponse {
  pingTrigger: boolean;
  startPing: () => void;
  stopPing: () => void;
  togglePing: () => void;
  colorStyle: React.CSSProperties;
}

const usePing = ({ duration, color }: UsePingProps): UsePingResponse => {
  const [pingTrigger, startPing, stopPing, togglePing] = useBoolean(false);

  const colorStyle = { "--pulse-color": color } as React.CSSProperties;

  React.useEffect(() => {
    if (!pingTrigger) return;

    if (typeof duration === "number") {
      setTimeout(() => {
        stopPing();
      }, duration);
    }
  }, [duration, pingTrigger]);

  return { pingTrigger, startPing, stopPing, togglePing, colorStyle };
};

export default usePing;
