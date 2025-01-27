import { useEffect, useState } from "react";

interface Props {
  cookieKey: string;
}

type Return = string | null;

const getCookieValue = (cookieKey: string): string | null => {
  const cookie = document.cookie.split("; ").find((row) => row.startsWith(`${cookieKey}=`));
  return cookie ? cookie.split("=")[1] : null;
};

const useReadCookie = ({ cookieKey }: Props): Return => {
  const [cookieValue, setCookieValue] = useState<string | null>(getCookieValue(cookieKey));

  useEffect(() => {
    const checkCookie = () => {
      const newValue = getCookieValue(cookieKey);

      if (newValue !== cookieValue) {
        setCookieValue(newValue);
      }
    };

    const intervalId = setInterval(checkCookie, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return cookieValue;
};

export default useReadCookie;
