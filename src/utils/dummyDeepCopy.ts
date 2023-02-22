export const retardedDeepCopy = (obj: Object) => {
  return JSON.parse(JSON.stringify(obj));
};
