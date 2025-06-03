import { setUser } from "@/store/auth";
import { authApi } from ".";
import { RegisterRequestType, RegisterResponseType } from "@/types/register";
import { AuthType } from "@/types/auth";
import { saveUserToLocalStorage } from "@/utils/authStorage";

export const extendedApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        queryFulfilled.then(async ({ data }) => {
          if (data.user) {
            dispatch(setUser(data));
            await saveUserToLocalStorage(data as AuthType);
          }
        });
      },
    }),
  }),
});

export const { useRegisterMutation } = extendedApi;
