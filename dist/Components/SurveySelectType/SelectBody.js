"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBody = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var NavBar_1 = require("../../Global/NavBar");
var SurveyHeader_1 = require("../../Global/SurveyHeader");
var BusinessModal_1 = require("../Business/BusinessModal");
var AssignButton_1 = require("./AssignButton");
var SelectBody = function (_a) {
    var kind = _a.kind;
    var navigate = (0, react_router_dom_1.useNavigate)();
    // 사업자세금 - 사업장 정보 모달창
    var _b = (0, react_1.useState)(false), modal = _b[0], setModal = _b[1];
    // 평균 환급액
    var average = 1234567;
    var averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (<Wrap>
      {" "}
      <SurveyHeader_1.SurveyHeader undoPage={"/survey"} title={"".concat(kind === "business" ? "사업자 세금" : "양도세 및 종부세", " \uD658\uAE09\uBC1B\uAE30")}/>
      <ContentBox>
        세무법인 프라이어의 <br />
        세무사들에게
        <br />
        평균 <span>{averageNumber}</span>원을
        <br />
        환급 받았어요
      </ContentBox>
      {kind === "assign" && (<SelectBtn onClick={function () { return navigate("/survey/start/assign/transfer"); }}>
          양도소득세로 환급받기
        </SelectBtn>)}
      {kind === "business" && (<AssignButton_1.AssignButton type={"corporation"} setModal={setModal}/>)}
      {kind === "assign" && (<SelectBtn onClick={function () { return navigate("/survey/start/assign/estate"); }}>
          종합부동산세로 환급받기
        </SelectBtn>)}
      {kind === "business" && (<AssignButton_1.AssignButton type={"person"} setModal={setModal}/>)}
      <BusinessModal_1.BusinessModal setModal={setModal} modal={modal}/>
      <NavBar_1.NavBar />
    </Wrap>);
};
exports.SelectBody = SelectBody;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 70%;\n  margin-top: 40%;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 70%;\n  margin-top: 40%;\n"])));
var ContentBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n  width: 90%;\n  padding: 5% 0;\n  margin-bottom: 10%;\n  @media screen and (max-height: 730px) {\n    margin-bottom: 5%;\n  }\n  @media screen and (max-height: 680px) {\n    font-size: 14px;\n    height: 17%;\n    padding: 2% 0;\n  }\n  @media screen and (max-height: 630px) {\n    display: none;\n  }\n  border-radius: 20px;\n  color: var(--color-thickSub);\n  background-color: var(--color-contentBox);\n"], ["\n  text-align: center;\n  width: 90%;\n  padding: 5% 0;\n  margin-bottom: 10%;\n  @media screen and (max-height: 730px) {\n    margin-bottom: 5%;\n  }\n  @media screen and (max-height: 680px) {\n    font-size: 14px;\n    height: 17%;\n    padding: 2% 0;\n  }\n  @media screen and (max-height: 630px) {\n    display: none;\n  }\n  border-radius: 20px;\n  color: var(--color-thickSub);\n  background-color: var(--color-contentBox);\n"])));
var SelectBtn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8%;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-main);\n  width: 90%;\n  border: 1px solid var(--color-main);\n  height: 60px;\n  border-radius: 40px;\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8%;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-main);\n  width: 90%;\n  border: 1px solid var(--color-main);\n  height: 60px;\n  border-radius: 40px;\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n    cursor: pointer;\n  }\n"])));
var SelectBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  width: 100%;\n  height: 50%;\n  background-color: var(--color-lightSub);\n  opacity: 0.5;\n  &.transfer {\n    background-color: var(--color-thickSub);\n    color: white;\n  }\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  width: 100%;\n  height: 50%;\n  background-color: var(--color-lightSub);\n  opacity: 0.5;\n  &.transfer {\n    background-color: var(--color-thickSub);\n    color: white;\n  }\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
