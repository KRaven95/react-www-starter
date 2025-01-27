export const formatStringNumber = (numberStr: string): string => {
  const number = parseFloat(numberStr);
  return number.toLocaleString("en", {
    minimumFractionDigits: 2, // Minimum number of fractional digits
    maximumFractionDigits: 2 // Maximum number of fractional digits
  });
};

export const formatNumberToString = (num: number, separator: string) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const formatWalletAddress = (address: string) => {
  if (!address) return "";
  return `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`;
};

export const getInfinityExpirationTimestamp = () => {
  return Number.MAX_SAFE_INTEGER;
};

export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer, noopener");
};

export const createLinkAndOpenInNewTab = (url: string) => {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer noopener nofollow";
  document.body.appendChild(anchor);
  anchor.click();
  document.removeChild(anchor);
};

export const trimString = (text: string, charsToLeftAmount: number) => {
  return text.slice(0, charsToLeftAmount);
};

const joinNonEmptyStrings = (...strings: (string | undefined)[]) => {
  return strings.filter((sT) => !!sT && sT.length > 0).join(" ");
};
export { joinNonEmptyStrings as classNames };

export const formatTimeMmSs = (timestamp: number): string => {
  // Convert timestamp to seconds
  const totalSeconds = Math.floor(timestamp / 1000);

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format minutes and seconds to always have two digits
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Return the formatted time string
  return `${formattedMinutes}:${formattedSeconds}`;
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getPrevKey = <T extends string>(obj: Record<T, any>, key: T): string | undefined => {
  const keys = Object.keys(obj);
  const currentIndex = keys.indexOf(key);
  return keys[currentIndex - 1];
};

export const getNextKey = <T extends string>(obj: Record<T, any>, key: T): string | undefined => {
  const keys = Object.keys(obj);
  const currentIndex = keys.indexOf(key);
  return keys[currentIndex + 1];
};

export const removeKey = <T extends Record<string, any>, K extends keyof T>(obj: T, key: K): Omit<T, K> => {
  // Destructure the object to exclude the specified key
  const { [key]: _, ...rest } = obj;
  // Type assertion is used here to match Omit<T, K>
  return rest as Omit<T, K>;
};

export const copyString = (value: string) => {
  navigator.clipboard.writeText(value);
};

export const randomString = () => {
  return (Math.random() + 1).toString(36).substring(7);
};
