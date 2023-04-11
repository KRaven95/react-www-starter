export const deepCopy = <T>(thingToBeDeepCopied: any): T => {
  return JSON.parse(JSON.stringify(thingToBeDeepCopied));
};
