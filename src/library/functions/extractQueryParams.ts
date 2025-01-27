export const extractQueryParams = (url: string) => {
  const array = url.split("?");

  let queryParams = "";

  if (!!array && !!array[1] && array[1].length > 0) {
    queryParams = array[1];
  }

  return queryParams;
};
