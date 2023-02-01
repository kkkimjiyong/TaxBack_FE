import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";

type TsurveyResponse = {
  question: string;
  response: string;
};

type TinitialState = {
  responses: TsurveyResponse[];
  isLoading?: boolean;
  error: string;
};

const initialState: TinitialState = {
  responses: [],
  isLoading: false,
  error: "",
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurveyResponse: (state, action: PayloadAction<TsurveyResponse>) => {
      state.responses.push(action.payload);
      console.log(action.payload);
    },
  },
  extraReducers: {},
});

export const { addSurveyResponse } = surveySlice.actions;
export default surveySlice.reducer;
