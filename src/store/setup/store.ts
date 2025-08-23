import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../auth";
import { authApi } from "@/services/auth";
import { noteApi } from "@/services/note";
import { errorReducer } from "../error";
import { noteReducer } from "../note";
import { userApi } from "@/services/user";

const combinedReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  note: noteReducer,
  [authApi.reducerPath]: authApi.reducer,
  [noteApi.reducerPath]: noteApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const rootReducer = (state: any, action: any) => combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(noteApi.middleware)
      .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
