import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import bookmarkSlice from "./bookmarkSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    bookmark: bookmarkSlice,
  },
});
