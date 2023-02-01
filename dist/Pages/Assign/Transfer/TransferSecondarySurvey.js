"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondarySurvey = void 0;
var react_1 = require("react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../../Global/Layout");
var SurveyHeader_1 = require("../../../Global/SurveyHeader");
var ai_1 = require("react-icons/ai");
var TransferSecondarySurvey_1 = require("../../../Assets/Survey/TransferSecondarySurvey");
var react_router_dom_1 = require("react-router-dom");
var SecondarySurvey = function () {
    var _a;
    var type = (0, react_router_dom_1.useParams)().type;
    var navigate = (0, react_router_dom_1.useNavigate)();
    console.log(type);
    var _b = (0, react_2.useState)([]), surveyList = _b[0], setSurveyList = _b[1];
    var CheckSurveyList = function () {
        if (type === "land") {
            setSurveyList(TransferSecondarySurvey_1.SecondaryLandSurvey);
            setTotalProcess(0);
        }
        if (type === "house") {
            setSurveyList(TransferSecondarySurvey_1.SecondaryHouseSurvey);
            setTotalProcess(1);
        }
    };
    (0, react_1.useEffect)(function () {
        CheckSurveyList();
        console.log(surveyList);
    }, []);
    //현재 진행도 상태값
    var _c = (0, react_2.useState)(0), process = _c[0], setProcess = _c[1];
    //총 진행도 상태값
    var _d = (0, react_2.useState)(), totalProcess = _d[0], setTotalProcess = _d[1];
    //현재 질문 응답데이터 상태값
    var _e = (0, react_2.useState)(""), response = _e[0], setResponse = _e[1];
    //추가 설문 토탈 응답데이터 상태값
    var _f = (0, react_2.useState)([]), totalResponses = _f[0], setTotalResponses = _f[1];
    var BackButtonHandler = function () {
        if (process === 0) {
            if (window.confirm("메인화면으로 나가시겠습니까?")) {
                navigate("/");
            }
        }
        else {
            setProcess(function (prev) { return prev - 1; });
            setTotalResponses(function (prev) { return prev.slice(0, -1); });
        }
    };
    var NextButtonHandler = function () {
        if (process === totalProcess) {
            navigate("/survey/transfer/result");
        }
        if (response.length > 1) {
            setProcess(function (prev) { return prev + 1; });
            setTotalResponses(function (prev) { return prev.concat(response); });
        }
        else {
            alert("응답을 해주세요");
        }
    };
    console.log(totalResponses);
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader />
      <QuestionBox>{(_a = surveyList[process]) === null || _a === void 0 ? void 0 : _a.question}</QuestionBox>
      <TextArea onChange={function (e) { return setResponse(e.target.value); }} placeholder="예: 일시적 2주택 상태로 비과세가 가능하다고 생각하였으나, 비과세 받지 못함."/>
      <ButtonBox>
        <Button onClick={BackButtonHandler}>뒤로</Button>
        <NextBtn onClick={NextButtonHandler} className={response.length > 1 && "written"}>
          다음
          <ai_1.AiOutlineArrowRight className="icon"/>
        </NextBtn>
      </ButtonBox>
    </Layout_1.Layout>);
};
exports.SecondarySurvey = SecondarySurvey;
var QuestionBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 600;\n  width: 90%;\n  margin-top: 35%;\n  padding: 5% 0%;\n"], ["\n  font-size: 18px;\n  font-weight: 600;\n  width: 90%;\n  margin-top: 35%;\n  padding: 5% 0%;\n"])));
var TextArea = styled_components_1.default.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  line-height: 1.5;\n  width: 85%;\n  height: 35%;\n  margin-bottom: 5%;\n  padding: 5% 2%;\n  border-radius: 15px;\n  border: 1px solid var(--color-gray);\n"], ["\n  line-height: 1.5;\n  width: 85%;\n  height: 35%;\n  margin-bottom: 5%;\n  padding: 5% 2%;\n  border-radius: 15px;\n  border: 1px solid var(--color-gray);\n"])));
var ButtonBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5%;\n"], ["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5%;\n"])));
var Button = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 600;\n  color: white;\n  padding: 3% 12%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: white;\n  padding: 3% 12%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"])));
var NextBtn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 600;\n  color: white;\n  padding: 3% 22%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  display: flex;\n  align-items: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.written {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: white;\n  padding: 3% 22%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  display: flex;\n  align-items: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.written {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
