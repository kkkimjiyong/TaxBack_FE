import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  responses: [],
  isLoading: false,
  error: null,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurveyResponse: (state, action) => {
      state.responses.push(action.payload);
      console.log(action.payload);
    },
  },
  extraReducers: {},
});

export const { addSurveyResponse } = surveySlice.actions;
export default surveySlice.reducer;
