"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextModal = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var RefundBasis_1 = require("../Assets/RefundBasis");
var TextModal = function (_a) {
    var active = _a.active, setActive = _a.setActive;
    return (<BackGroundModal active={active}>
      <Wrap active={active}>
        <CloseButton onClick={function () { return setActive(false); }}>X</CloseButton>
        <Title>{RefundBasis_1.refundBasisList.title}</Title>
        <SubTextBox>
          <div>{RefundBasis_1.refundBasisList.subTitle}</div>
          <div>{RefundBasis_1.refundBasisList.subDetailTitle}</div>
          <div>{RefundBasis_1.refundBasisList.detail}</div>
        </SubTextBox>

        <div>
          {RefundBasis_1.refundBasisList.textList.map(function (paragraph) {
            return <ParagraphBox>{paragraph}</ParagraphBox>;
        })}
        </div>
      </Wrap>
    </BackGroundModal>);
};
exports.TextModal = TextModal;
var BackGroundModal = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.6);\n"], ["\n  height: ", ";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.6);\n"])), function (_a) {
    var active = _a.active;
    return (active ? "100%" : " 0%");
});
var Wrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 10;\n  bottom: -5%;\n  width: 90%;\n  padding: 10px 30px;\n  height: ", ";\n  transition: all 400ms ease-in-out;\n  background-color: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n"], ["\n  position: fixed;\n  z-index: 10;\n  bottom: -5%;\n  width: 90%;\n  padding: 10px 30px;\n  height: ", ";\n  transition: all 400ms ease-in-out;\n  background-color: white;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n"])), function (_a) {
    var active = _a.active;
    return (active ? "80%" : " 0%");
});
var CloseButton = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n"])));
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin-bottom: 30px;\n"], ["\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin-bottom: 30px;\n"])));
var SubTextBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: 30px;\n"], ["\n  margin-bottom: 30px;\n"])));
var ParagraphBox = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
