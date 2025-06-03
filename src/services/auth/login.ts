import { LoginRequestType, LoginResponseType } from "@/types/login";
import { authApi } from ".";
import { setUser } from "@/store/auth";
import { AuthType } from "@/types/auth";
import { saveUserToLocalStorage } from "@/utils/authStorage";
import { setError } from "@/store/error";

const extendedApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        queryFulfilled
          .then(async ({ data }) => {
            if (data.user) {
              dispatch(setUser(data));
              await saveUserToLocalStorage(data as AuthType);
            }
          })
          .catch(() => {
            dispatch(setError("Login failed. Please check your credentials."));
          });
      },
    }),
  }),
});

export const { useLoginMutation } = extendedApi;
