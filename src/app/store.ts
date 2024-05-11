import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    login: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
