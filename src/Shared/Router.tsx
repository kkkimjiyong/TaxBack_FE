import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyMain from "../Pages/SurveyMain";
import { TransferSurvey } from "../Pages/Assign/Transfer/TransferSurvey";
import { AssignStart } from "../Pages/Assign/AssignStart";
import { SurveyVerify } from "../Pages/SurveyVerify";
import { SecondarySurvey } from "../Pages/Assign/Transfer/TransferSecondarySurvey";
import { TransferSurveyResult } from "../Pages/Assign/Transfer/TransferSurveyResult";
import { TransferDone } from "../Pages/Assign/Transfer/TransferDone";
import { SelectSurveyType } from "../Pages/SurveySelectType";
import { EstateSurvey } from "../Pages/Assign/Estate/EstateSurvey";
import { Main } from "../Pages/Main";
import { About } from "../Pages/About/About";
import { SignUp } from "../Pages/SignUp";
import { IndividualRefund } from "../Pages/IndividualRefund";
import { Counsel } from "../Pages/About/Counsel";
import { CounselRequest } from "../Pages/About/CounselRequest";
import { Certify } from "../Pages/Certify";
import { SignUpDone } from "../Pages/SignUpDone";
import { Login } from "../Pages/Login";
import { Apply } from "../Pages/About/Apply";
import { EditProfile } from "../Pages/About/EditProfile";
import { InfoMain } from "../Pages/InfoMain";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginmain" element={<Main />} />
        <Route path="/" element={<InfoMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/certify" element={<Certify />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/apply" element={<Apply />} />
        <Route path="/about/editprofile" element={<EditProfile />} />
        <Route path="/about/counsel" element={<Counsel />} />
        <Route path="/about/counsel/request" element={<CounselRequest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/done" element={<SignUpDone />} />
        <Route path="/survey" element={<SurveyMain />} />
        <Route path="/survey/refund" element={<IndividualRefund />} />
        <Route path="/survey/start/assign/:type" element={<AssignStart />} />
        <Route path="/survey/select/:kind" element={<SelectSurveyType />} />
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
