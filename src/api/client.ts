import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { GLOBAL_TIMEOUT } from "src/constants/constants";

export interface ApiClientOptions {
  baseUrl: string;
}

export class ApiClient {
  private axios: AxiosInstance;

  constructor(private options: ApiClientOptions) {
    this.axios = this.createAxiosInstance();
  }

  private createAxiosInstance() {
    const instance = axios.create({
      baseURL: this.options.baseUrl,
      headers: {
        "Content-Type": "application/json"
      }
    });

    // instance.interceptors.request.use(async (config) => {
    //   const accessToken = await auth.currentUser?.getIdToken();
    //   config.headers.Authorization = accessToken;

    //   return config;
    // });

    return instance;
  }

  async sendRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), GLOBAL_TIMEOUT);

    const response = await this.axios.request({
      ...config,
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return response;
  }
}
