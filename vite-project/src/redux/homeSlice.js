import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  quote: "",
  tags: [],
};

const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      console.log(
        "Reducer , field and value si ",
        field,
        value,
        "the initial state is ",
        initialState
      );
    },
  },
});

export const { updateField } = homeSlice.actions;

export default homeSlice.reducer;
