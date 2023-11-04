import React from "react";
import { useEffect } from "react";

type UseReadSessionStorageProps<T> = {
  key: string;
  value: T;
};

type UseReadSessionStorageReturn<T> = (T | null)[];

const useReadSessionStorage = <T,>({ key, value }: UseReadSessionStorageProps<T>): UseReadSessionStorageReturn<T> => {
  const [stored, setStored] = React.useState<T | null>(null);

  useEffect(() => {
    try {
      const item = sessionStorage.getItem(key) || "null";
      setStored(JSON.parse(item));
    } catch (error) {
      console.log(`Error saving value for key ${key} to sessionStorage`);
    } finally {
      setStored(null);
    }
  }, [key, value]);

  return [stored];
};

export default useReadSessionStorage;
