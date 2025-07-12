import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "../base/customBaseQuery";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
