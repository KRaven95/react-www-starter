import { useId, useState } from "react";

type ReturnType<V> = [V, (value: V) => void];

function useLocalStorage<V>(initial: V, customStorageKey: string): ReturnType<V> {
  const defaultStorageKey = useId();
  const cachedValue = JSON.parse(localStorage.getItem(customStorageKey || defaultStorageKey) || "null") as V | null;

  const [value, setValue] = useState<V>(cachedValue || initial);

  const updateValue = (value: V) => {
    setValue(value);
    localStorage.setItem(
      customStorageKey || defaultStorageKey,
      typeof value === "string" ? value : JSON.stringify(value)
    );
  };

  return [value, updateValue];
}

export default useLocalStorage;
