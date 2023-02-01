"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var SurveySlice_1 = require("../Modules/SurveySlice");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        survey: SurveySlice_1.default,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});
exports.default = store;
