import React from "react";
import { AxiosError, AxiosResponse } from "axios";
import { PaginationMeta } from "src/api/dtos.types";
import useLoading from "./useLoading";

interface HookReturnData<T> {
  response: T | null;
  errorMessage: AxiosError | null;
  isLoading: boolean;
  requestTrigger: (queryParams?: PaginationMeta) => Promise<void>;
}

function useRequest<T>(
  requestFn: (queryParams?: PaginationMeta) => Promise<AxiosResponse<T, any>>,
  onError?: () => void
): HookReturnData<T> {
  const [response, setResponse] = React.useState<T | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<AxiosError | null>(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const requestTrigger = async (queryParams?: PaginationMeta) => {
    startLoading();
    try {
      const response = await requestFn(queryParams);
      setResponse(response.data);
    } catch (e: unknown) {
      if (onError) {
        onError();
      }

      if (!(e instanceof AxiosError)) throw e;

      setErrorMessage(e);
    } finally {
      stopLoading();
    }
  };

  return { requestTrigger, isLoading, response, errorMessage };
}

export default useRequest;
