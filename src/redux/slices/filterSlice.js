import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCatIndex: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCatIndex(state, action) {
      state.activeCatIndex = action.payload0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCatIndex } = filterSlice.actions;

export default filterSlice.reducer;
