import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: {
    order: "rating",
    title: "популярности(max)",
  },
};

export const sortSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
