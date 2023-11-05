import React from "react";
import { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import useBoolean from "./useBoolean";

interface HookArgs<A, R> {
  requestFn: (args?: A) => Promise<AxiosResponse<R, any>>;
  beforeStart?: () => void;
  onSuccessFn?: () => void;
  onError?: (error: AxiosError) => void;
  onFinally?: () => void;
  setDataOnSuccess?: (responseData: R) => void;
}

interface RequestArguments<A> {
  args: A;
}

type HookReturnData<A, R> = [
  requestTrigger: (props: RequestArguments<A>) => Promise<void>,
  isLoading: boolean,
  response: R | null,
  axiosError: AxiosError | null,
  headers: AxiosHeaders
];

function useRequestV2<A, R>({
  requestFn,
  setDataOnSuccess,
  onError,
  onSuccessFn,
  beforeStart,
  onFinally
}: HookArgs<A, R>): HookReturnData<A, R> {
  const [response, setResponse] = React.useState<R | null>(null);
  const [headers, setHeaders] = React.useState<any | null>(null);
  const [axiosError, setAxiosError] = React.useState<AxiosError | null>(null);
  const [isLoading, setLoading, resetLoading] = useBoolean(false);

  const requestTrigger = async (props: RequestArguments<A>) => {
    setLoading();
    if (!!beforeStart) beforeStart();
    try {
      const response = await requestFn(props.args);
      setHeaders(response.headers);
      setResponse(response.data);

      if (!!setDataOnSuccess) setDataOnSuccess(response.data);
      if (!!onSuccessFn) onSuccessFn();
    } catch (e: unknown) {
      if (!(e instanceof AxiosError)) throw e;
      setAxiosError(e);
      if (!!onError) onError(e);
    } finally {
      resetLoading();
      if (!!onFinally) onFinally();
    }
  };

  return [requestTrigger, isLoading, response, axiosError, headers];
}

export default useRequestV2;
