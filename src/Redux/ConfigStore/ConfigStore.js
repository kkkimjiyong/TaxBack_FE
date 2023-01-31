import { configureStore } from "@reduxjs/toolkit";
import survey from "../Modules/SurveySlice";

const store = configureStore({
  reducer: {
    survey: survey,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
