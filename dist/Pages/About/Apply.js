"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apply = void 0;
var react_1 = require("react");
var Layout_1 = require("../../Global/Layout");
var MainHeader_1 = require("../../Global/MainHeader");
var SurveyHeader_1 = require("../../Global/SurveyHeader");
var io_1 = require("react-icons/io");
var styled_components_1 = require("styled-components");
var Apply = function () {
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader undoPage={"/about"} title={"내 환급 신청 내역"}/>
      <ListCtn>
        <ListBox>
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <io_1.IoIosArrowForward />
          </div>
        </ListBox>
      </ListCtn>
    </Layout_1.Layout>);
};
exports.Apply = Apply;
var ListCtn = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 90%;\n  margin-top: 5%;\n"], ["\n  width: 90%;\n  margin-top: 5%;\n"])));
var ListBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3% 5%;\n  margin-top: 30%;\n  width: 80%;\n  border: 1px solid var(--color-main);\n  border-radius: 15px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3% 5%;\n  margin-top: 30%;\n  width: 80%;\n  border: 1px solid var(--color-main);\n  border-radius: 15px;\n"])));
var ListType = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n  color: var(--color-main);\n  &.date {\n    color: black;\n    font-weight: 400;\n  }\n"], ["\n  font-size: 14px;\n  color: var(--color-main);\n  &.date {\n    color: black;\n    font-weight: 400;\n  }\n"])));
var ListTitle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 2px 0;\n"], ["\n  margin: 2px 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
