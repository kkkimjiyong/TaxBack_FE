"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignButton = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var AssignButton = function (_a) {
    var type = _a.type, setModal = _a.setModal;
    var CheckBusinessPlace = function () {
        setModal(true);
    };
    return (<Wrap onClick={CheckBusinessPlace}>
      {type === "corporation" ? "법인사업자" : "개인사업자"}로 환급받기
    </Wrap>);
};
exports.AssignButton = AssignButton;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8%;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-main);\n  width: 90%;\n  border: 1px solid var(--color-main);\n  height: 60px;\n  border-radius: 40px;\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 8%;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-main);\n  width: 90%;\n  border: 1px solid var(--color-main);\n  height: 60px;\n  border-radius: 40px;\n  :hover {\n    background-color: var(--color-main);\n    color: white;\n    opacity: 1;\n    cursor: pointer;\n  }\n"])));
var templateObject_1;
