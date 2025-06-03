import { AuthType } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./setup/store";

const initialState: Partial<AuthType & { isAuthenticated: boolean }> = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  isAuthenticated: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthType>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    removeUser(state) {
      state.user = undefined;
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, removeUser } = auth.actions;
export const authReducer = auth.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
