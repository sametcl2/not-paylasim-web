import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../base/customBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
