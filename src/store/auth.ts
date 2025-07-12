import { AuthType } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./setup/store";

const initialState: Partial<
  AuthType & { isAuthenticated: boolean; isLoading: boolean }
> = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  isAuthenticated: false,
  isLoading: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUser(state, action: PayloadAction<AuthType>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser(state) {
      state.user = undefined;
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setUser, removeUser } = auth.actions;
export const authReducer = auth.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
