import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";

interface AuthState {
  userData: UserCredential | null;
}

const initialState = { userData: null } satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserCredential>) {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
