import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  roomId: string | null;
}

const initialState = { roomId: null } satisfies AppState as AppState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setRoomId(state, action: PayloadAction<string>) {
      state.roomId = action.payload;
    },
  },
});

export const { setRoomId } = appSlice.actions;
export default appSlice.reducer;
