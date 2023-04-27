import { createSlice } from "@reduxjs/toolkit";

export const endtimeSlice = createSlice({
  name: "endtimeSlice",
  initialState: { value: { getendtime: "00:00" } },
  reducers: {
    addendtime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addendtime } = endtimeSlice.actions;
export default endtimeSlice.reducer;
