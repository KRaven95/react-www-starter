import { useState } from "react";
import { readCookie, writeCookie, removeCookie } from "@library/frontend/tools/cookies";

export interface CookiedStringReturn {
  value: string | null;
  update: (exp: number, authKey?: string) => void;
  remove: () => void;
}

interface Props {
  cookieKey: string;
  initial?: string;
}

const useCookiedString = ({ cookieKey, initial }: Props): CookiedStringReturn => {
  const initialOrNull = initial || null;
  const [value, setValue] = useState<string | null>(readCookie(cookieKey) || initialOrNull);
  const update = (exp: number, value?: string) => {
    if (!value) return;

    writeCookie(cookieKey, value, exp);
    setValue(value);
  };
  const remove = () => {
    removeCookie(cookieKey);
    setValue(initialOrNull);
  };

  return { value, update, remove };
};

export default useCookiedString;
