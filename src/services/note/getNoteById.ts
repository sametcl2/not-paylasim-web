import { setError } from "@/store/error";
import { noteApi } from ".";

const extendedApi = noteApi.injectEndpoints({
  endpoints: (builder) => ({
    getNoteById: builder.query({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          queryFulfilled.then(({ data }) => {
            // dispatch(setNote(data));
          });
        } catch (error) {
          dispatch(setError("Something went wrong."));
        }
      },
    }),
  }),
});

export const { useGetNoteByIdQuery } = extendedApi;
