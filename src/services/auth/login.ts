import { LoginRequestType, LoginResponseType } from "@/types/login";
import { authApi } from ".";
import { setLoading, setUser } from "@/store/auth";
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
        dispatch(setLoading(true));
        queryFulfilled
          .then(async ({ data }) => {
            if (data.user) {
              dispatch(setUser(data));
              await saveUserToLocalStorage(data as AuthType);
            }
          })
          .catch(() => {
            dispatch(setLoading(false));
            dispatch(setError("Giriş başarısız."));
          });
      },
    }),
  }),
});

export const { useLoginMutation } = extendedApi;
