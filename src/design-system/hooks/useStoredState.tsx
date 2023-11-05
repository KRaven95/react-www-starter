import React from "react";

type ReturnType<V> = [V, React.Dispatch<React.SetStateAction<V>>];

function useStoredState<V>(initial: V, customStorageKey?: string): ReturnType<V> {
  const defaultStorageKey = React.useId();
  const cachedValue = JSON.parse(sessionStorage.getItem(customStorageKey || defaultStorageKey) || "null") as V | null;

  const [value, setValue] = React.useState<V>(cachedValue || initial);

  React.useEffect(() => {
    sessionStorage.setItem(customStorageKey || defaultStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useStoredState;
