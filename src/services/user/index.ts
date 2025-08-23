import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../base/customBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
