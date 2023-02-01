"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var SurveyMain_1 = require("../Pages/SurveyMain");
var TransferSurvey_1 = require("../Pages/Assign/Transfer/TransferSurvey");
var AssignStart_1 = require("../Pages/Assign/AssignStart");
var SurveyVerify_1 = require("../Pages/SurveyVerify");
var TransferSecondarySurvey_1 = require("../Pages/Assign/Transfer/TransferSecondarySurvey");
var TransferSurveyResult_1 = require("../Pages/Assign/Transfer/TransferSurveyResult");
var TransferDone_1 = require("../Pages/Assign/Transfer/TransferDone");
var SurveySelectType_1 = require("../Pages/SurveySelectType");
var EstateSurvey_1 = require("../Pages/Assign/Estate/EstateSurvey");
var Main_1 = require("../Pages/Main");
var About_1 = require("../Pages/About/About");
var SignUp_1 = require("../Pages/SignUp");
var IndividualRefund_1 = require("../Pages/IndividualRefund");
var Counsel_1 = require("../Pages/About/Counsel");
var CounselRequest_1 = require("../Pages/About/CounselRequest");
var Certify_tsx_1 = require("../Pages/Certify.tsx");
var SignUpDone_1 = require("../Pages/SignUpDone");
var Login_1 = require("../Pages/Login");
var Apply_1 = require("../Pages/About/Apply");
var EditProfile_1 = require("../Pages/About/EditProfile");
var InfoMain_1 = require("../Pages/InfoMain");
var Router = function () {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/loginmain" element={<Main_1.Main />}/>
        <react_router_dom_1.Route path="/" element={<InfoMain_1.InfoMain />}/>
        <react_router_dom_1.Route path="/login" element={<Login_1.Login />}/>
        <react_router_dom_1.Route path="/certify" element={<Certify_tsx_1.Certify />}/>
        <react_router_dom_1.Route path="/about" element={<About_1.About />}/>
        <react_router_dom_1.Route path="/about/apply" element={<Apply_1.Apply />}/>
        <react_router_dom_1.Route path="/about/editprofile" element={<EditProfile_1.EditProfile />}/>
        <react_router_dom_1.Route path="/about/counsel" element={<Counsel_1.Counsel />}/>
        <react_router_dom_1.Route path="/about/counsel/request" element={<CounselRequest_1.CounselRequest />}/>
        <react_router_dom_1.Route path="/signup" element={<SignUp_1.SignUp />}/>
        <react_router_dom_1.Route path="/signup/done" element={<SignUpDone_1.SignUpDone />}/>
        <react_router_dom_1.Route path="/survey" element={<SurveyMain_1.default />}/>
        <react_router_dom_1.Route path="/survey/refund" element={<IndividualRefund_1.IndividualRefund />}/>
        <react_router_dom_1.Route path="/survey/start/assign/:type" element={<AssignStart_1.AssignStart />}/>
        <react_router_dom_1.Route path="/survey/select/:kind" element={<SurveySelectType_1.SelectSurveyType />}/>
        <react_router_dom_1.Route path="/survey/verify/:type" element={<SurveyVerify_1.SurveyVerify />}/>
        <react_router_dom_1.Route path="/survey/transfer" element={<TransferSurvey_1.TransferSurvey />}/>
        <react_router_dom_1.Route path="/survey/estate" element={<EstateSurvey_1.EstateSurvey />}/>
        <react_router_dom_1.Route path="/survey/transfer/second/:type" element={<TransferSecondarySurvey_1.SecondarySurvey />}/>
        <react_router_dom_1.Route path="/survey/transfer/result" element={<TransferSurveyResult_1.TransferSurveyResult />}/>
        <react_router_dom_1.Route path="/survey/transfer/done" element={<TransferDone_1.TransferDone />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = Router;
