import { SearchNoteRequestType, SearchNoteResponseType } from "@/types/note";
import { noteApi } from ".";
import { setError } from "@/store/error";
import { setNotes } from "@/store/note";

const extendedApi = noteApi.injectEndpoints({
  endpoints: (builder) => ({
    searchNote: builder.query<SearchNoteResponseType, SearchNoteRequestType>({
      query: (query) => ({
        url: `/notes/search?keyword=${query}`,
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(setNotes(data.data));
          })
          .catch(() => {
            dispatch(setError("Search failed. Please try again."));
          });
      },
    }),
  }),
});

export const { useLazySearchNoteQuery } = extendedApi;
