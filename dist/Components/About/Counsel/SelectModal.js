"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectModal = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SelectModal = function (_a) {
    var selectModal = _a.selectModal;
    return (<BackGroundModal selectModal={selectModal}>
      <Wrap selectModal={selectModal}>SelectModal</Wrap>;
    </BackGroundModal>);
};
exports.SelectModal = SelectModal;
var BackGroundModal = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.6);\n"], ["\n  height: ", ";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.6);\n"])), function (_a) {
    var selectModal = _a.selectModal;
    return (selectModal ? "100%" : " 0%");
});
var Wrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 11;\n  bottom: 0;\n  background-color: white;\n  width: 100%;\n  height: ", ";\n  transition: all 600ms ease-in-out;\n"], ["\n  position: absolute;\n  z-index: 11;\n  bottom: 0;\n  background-color: white;\n  width: 100%;\n  height: ", ";\n  transition: all 600ms ease-in-out;\n"])), function (_a) {
    var selectModal = _a.selectModal;
    return (selectModal ? "30%" : "0%");
});
var templateObject_1, templateObject_2;
