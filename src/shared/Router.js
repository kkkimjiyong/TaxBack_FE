import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyMain from "../Pages/SurveyMain";
import { TransferSurvey } from "../Pages/TransferSurvey";
import { SurveyStart } from "../Pages/SurveyStart";
import { SurveyVerify } from "../Pages/SurveyVerify";
import { SecondarySurvey } from "../Pages/TransferSecondarySurvey";
import { TransferSurveyResult } from "../Pages/TransferSurveyResult";
import { TransferDone } from "../Pages/TransferDone";
import { SelectSurveyType } from "../Pages/SurveySelelctType";
import { EstateSurvey } from "../Pages/EstateSurvey";
import { Main } from "../Pages/Main";
import { More } from "../Pages/More";
import { SignUp } from "../Pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<More />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/survey" element={<SurveyMain />} />
        <Route path="/survey/start/:type" element={<SurveyStart />} />
        <Route path="/survey/select" element={<SelectSurveyType />} />
        <Route path="/survey/verify/:type" element={<SurveyVerify />} />
        <Route path="/survey/transfer" element={<TransferSurvey />} />
        <Route path="/survey/estate" element={<EstateSurvey />} />
        <Route
          path="/survey/transfer/second/:type"
          element={<SecondarySurvey />}
        />
        <Route
          path="/survey/transfer/result"
          element={<TransferSurveyResult />}
        />
        <Route path="/survey/transfer/done" element={<TransferDone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
