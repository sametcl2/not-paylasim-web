import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./setup/store";
import { Note } from "@/types/note";

type NoteType = {
  notes: Note[];
};

const initialState: NoteType = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
  },
});

export const { setNotes } = noteSlice.actions;

export const noteReducer = noteSlice.reducer;

export const selectNotes = (state: RootState) => state.note.notes;
