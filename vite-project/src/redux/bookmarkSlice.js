import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "Bookmark",
  initialState,
  reducers: {
    updateFieldBookmark: (state, action) => {
      const { field, value } = action.payload;
      state[field].push(value);
    },
  },
});

export const { updateFieldBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
