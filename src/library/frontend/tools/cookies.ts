export const readCookie = (cookieKey: string): string | undefined => {
  const allCookies = document.cookie;
  const splitted = allCookies.split("; ");
  const cookieByKey = splitted.find((row) => row.startsWith(cookieKey));
  const cookieValue = cookieByKey?.split("=")[1];
  return cookieValue;
};

export const writeCookie = (key: string, value: string | number, expTimestamp: number) => {
  document.cookie = `${key}=${value}; expires=${new Date(expTimestamp).toUTCString()}; path=/`;
};

export const removeCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
