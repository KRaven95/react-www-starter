import { useEffect } from "react";

type UseWriteSessionStorageProps<T> = {
  key: string;
  value: T;
};

const useWriteSessionStorage = <T,>({ key, value }: UseWriteSessionStorageProps<T>) => {
  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`Error saving value for key ${key} to sessionStorage`);
    }
  }, [key, value]);
};

export default useWriteSessionStorage;
