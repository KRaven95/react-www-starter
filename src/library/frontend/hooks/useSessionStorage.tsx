import React from "react";

type ReturnType<V> = [V, (value: V) => void];

function useSessionStorage<V>(initial: V, customStorageKey?: string): ReturnType<V> {
  const defaultStorageKey = React.useId();
  const cachedValue = JSON.parse(sessionStorage.getItem(customStorageKey || defaultStorageKey) || "null") as V | null;

  const [value, setValue] = React.useState<V>(cachedValue || initial);

  const updateValue = (value: V) => {
    setValue(value);
    sessionStorage.setItem(customStorageKey || defaultStorageKey, JSON.stringify(value));
  };

  return [value, updateValue];
}

export default useSessionStorage;
