"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyResponse = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SurveyResponse = function (_a) {
    var response = _a.response, clicked = _a.clicked, setClicked = _a.setClicked, index = _a.index, setCheckClick = _a.setCheckClick, setResponses = _a.setResponses, process = _a.process, responses = _a.responses;
    //응답체크햇는 지, 안했는 지 판별함수
    var responseClickHandler = function () {
        setClicked(index);
        setCheckClick(true);
        console.log(responses);
    };
    return (<Wrap onClick={responseClickHandler} className={clicked === index && "clicked"}>
      <div>{response.main}</div>
      {response.sub && <SubTxt>{response.sub}</SubTxt>}
    </Wrap>);
};
exports.SurveyResponse = SurveyResponse;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5% 4%;\n  margin: 4% 0;\n  border: 1.5px solid var(--color-main);\n  border-radius: 10px;\n  &.clicked {\n    font-weight: 600;\n    border: 3px solid var(--color-main);\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  padding: 5% 4%;\n  margin: 4% 0;\n  border: 1.5px solid var(--color-main);\n  border-radius: 10px;\n  &.clicked {\n    font-weight: 600;\n    border: 3px solid var(--color-main);\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var SubTxt = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--color-main);\n"], ["\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--color-main);\n"])));
var templateObject_1, templateObject_2;
