import type { GenericErrorModel, HttpResponse } from "src/services/api";
import { Api, ContentType } from "src/services/api";

export const limit = 10;

export const api = new Api({
  baseUrl: `${import.meta.env.VITE_APP_API_PREFIX}`,
  securityWorker: (token) =>
    token ? { headers: { authorization: `Bearer ${token as string}` } } : {},
  baseApiParams: {
    headers: {
      "content-type": ContentType.Json,
    },
    format: "json",
  },
});

export function pageToOffset(
  page = 1,
  localLimit = limit
): { limit: number; offset: number } {
  const offset = (page - 1) * localLimit;
  return { limit: localLimit, offset };
}

export function isFetchError<E = GenericErrorModel>(
  e: unknown
): e is HttpResponse<unknown, E> {
  return e instanceof Object && "error" in e;
}
