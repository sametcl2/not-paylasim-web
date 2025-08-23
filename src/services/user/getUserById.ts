import { GetUserByIdRequestType, GetUserByIdResponseType } from "@/types/user";
import { userApi } from ".";

const extendedApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResponseType, GetUserByIdRequestType>(
      {
        query: ({ id }) => `/user/${id}`,
      }
    ),
  }),
});

export const { useLazyGetUserByIdQuery } = extendedApi;
