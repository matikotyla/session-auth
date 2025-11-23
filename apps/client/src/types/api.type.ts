import { AxiosError } from "axios";

export namespace ApiType {
  type ApiErrorContent = {
    message: string;
  };

  export type ApiError = AxiosError<ApiErrorContent>;
}
