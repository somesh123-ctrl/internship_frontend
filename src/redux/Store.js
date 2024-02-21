import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice.js";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
