"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSurveyResponse = exports.surveySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = require("axios");
var initialState = {
    responses: [],
    isLoading: false,
    error: null,
};
exports.surveySlice = (0, toolkit_1.createSlice)({
    name: "survey",
    initialState: initialState,
    reducers: {
        addSurveyResponse: function (state, action) {
            state.responses.push(action.payload);
            console.log(action.payload);
        },
    },
    extraReducers: {},
});
exports.addSurveyResponse = exports.surveySlice.actions.addSurveyResponse;
exports.default = exports.surveySlice.reducer;
