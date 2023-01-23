import { configureStore } from "@reduxjs/toolkit";
import step from "./step";

const store = configureStore({
  reducer: {
    step: step,
  }
});

export default store;
