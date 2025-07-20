import { setError } from "@/store/error";
import { noteApi } from ".";
import { NoteDetailsRequestType, NoteDetailsResponseType } from "@/types/note";

const extendedApi = noteApi.injectEndpoints({
  endpoints: (builder) => ({
    getNoteById: builder.query<NoteDetailsResponseType, NoteDetailsRequestType>(
      {
        query: (id) => ({
          url: `/notes/${id}`,
          method: "GET",
        }),
        async onQueryStarted(_, { dispatch }) {
          try {
          } catch (error) {
            dispatch(setError("Something went wrong."));
          }
        },
      }
    ),
  }),
});

export const { useGetNoteByIdQuery, useLazyGetNoteByIdQuery } = extendedApi;
