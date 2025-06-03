import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../base/customBaseQuery";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
