import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Slice/DataSlice";
const store = configureStore({
  reducer: {
    Slice: DataSlice,
  },
});
export default store;
