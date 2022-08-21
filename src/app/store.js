import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import codeReducer from "../features/codeSlice";

export default configureStore({
  reducer: {
    register: registerReducer,
    code: codeReducer,
  },
});
