import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  selectedPage: string;
};

const initialState: SliceState = {
  selectedPage: "1",
};

const selectedPage = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.selectedPage = action.payload;
    },
  },
});

const { actions, reducer } = selectedPage;

export const { setPage } = actions;

export default reducer;
