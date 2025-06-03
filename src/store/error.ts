import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./setup/store";

type ErrorState = {
  message: string;
  isError: boolean;
};

const initialState: ErrorState = {
  message: "",
  isError: false,
};

const error = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.message = action.payload;
      state.isError = true;
    },
    clearError(state) {
      state.message = "";
      state.isError = false;
    },
  },
});

export const { setError, clearError } = error.actions;
export const errorReducer = error.reducer;

export const selectErrorMessage = (state: RootState) => state.error.message;

export const selectIsError = (state: RootState) => state.error.isError;
