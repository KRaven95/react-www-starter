export const isJSON = (stringLike: any) => {
  try {
    JSON.parse(stringLike);
  } catch (e) {
    return false;
  }
  return true;
};
