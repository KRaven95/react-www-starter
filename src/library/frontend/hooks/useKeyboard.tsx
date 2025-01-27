import React, { useCallback, useEffect } from "react";

const useKeyboard = () => {
  const [lastKey, setLastKey] = React.useState<null | string>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setLastKey(e.key);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return lastKey;
};

export default useKeyboard;
