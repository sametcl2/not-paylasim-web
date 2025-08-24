import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { ErrorKeys } from "@/constants/error";
import {
  removeUser,
  selectAccessToken,
  selectRefreshToken,
  setUser,
} from "@/store/auth";
import { RootState } from "@/store/setup/store";
import { AuthType } from "@/types/auth";
import {
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "@/utils/authStorage";

export const baseUrl = import.meta.env.VITE_API_URL;

const mutex = new Mutex();

const executeBaseQuery = (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const state = api.getState() as RootState;
  const accessToken = selectAccessToken(state);

  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken || ""}`);
      }
      return headers;
    },
  })(args, api, extraOptions);
};

const refreshToken = (
  _args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const state = api.getState() as RootState;
  const accessToken = selectAccessToken(state);
  const refreshToken = selectRefreshToken(state);

  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${accessToken || ""}`);
      headers.set("refresh_token", refreshToken ?? "");
      return headers;
    },
  })({ url: "/auth/refresh", method: "POST" }, api, extraOptions);
};

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  mutex.waitForUnlock();
  let result = await executeBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await refreshToken(args, api, extraOptions);

        if (refreshResult.data) {
          api.dispatch(setUser(refreshResult.data as AuthType));
          await saveUserToLocalStorage(refreshResult.data as AuthType);

          result = await executeBaseQuery(args, api, extraOptions);
          if (result.error) {
            api.dispatch(removeUser());
            await removeUserFromLocalStorage();
          }
        } else {
          api.dispatch(removeUser());
          await removeUserFromLocalStorage();
          release();
          return {
            error: {
              status: 401,
              data: { code: ErrorKeys.tokenExpired },
            },
          };
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await executeBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};
