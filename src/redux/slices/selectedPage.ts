import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  selectedPage: number;
};

const initialState: SliceState = {
  selectedPage: 1,
};

const selectedPage = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload;
    },
  },
});

const { actions, reducer } = selectedPage;

export const { setPage } = actions;

export default reducer;
