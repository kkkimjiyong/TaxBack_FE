"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModal = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var AlertModal = function (_a) {
    var rightButtonTxt = _a.rightButtonTxt, leftButtonTxt = _a.leftButtonTxt, rightButtonEvent = _a.rightButtonEvent, leftButtonEvent = _a.leftButtonEvent, closeButtonEvent = _a.closeButtonEvent, contentTxt = _a.contentTxt, alert = _a.alert, setAlert = _a.setAlert;
    console.log(alert);
    return (<Wrap alert={alert}>
      <CloseBtn onClick={function () { return setAlert(false); }}>X</CloseBtn>
      <div>알림</div>
      <TextBox>{contentTxt}</TextBox>
      <ButtonBox>
        <Button onClick={leftButtonEvent}>{leftButtonTxt}</Button>
        <Button onClick={rightButtonEvent} className="next">
          {rightButtonTxt}
        </Button>
      </ButtonBox>
    </Wrap>);
};
exports.AlertModal = AlertModal;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 200;\n  bottom: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  background-color: white;\n  height: 25%;\n  transition: all 400ms ease-in-out;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 5% 0%;\n  font-weight: 700;\n  color: var(--color-thickSub);\n  box-shadow: 2px -5px 20px -5px gray;\n"], ["\n  position: absolute;\n  z-index: 200;\n  bottom: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  background-color: white;\n  height: 25%;\n  transition: all 400ms ease-in-out;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 5% 0%;\n  font-weight: 700;\n  color: var(--color-thickSub);\n  box-shadow: 2px -5px 20px -5px gray;\n"])), function (_a) {
    var alert = _a.alert;
    return (alert ? "0%" : "-40%");
});
var CloseBtn = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: 5%;\n  top: 4%;\n"], ["\n  position: absolute;\n  right: 5%;\n  top: 4%;\n"])));
var TextBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 40%;\n  width: 70%;\n  background-color: firebrick;\n  font-size: var(--font-small);\n  text-align: center;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin: 5% 0%;\n"], ["\n  height: 40%;\n  width: 70%;\n  background-color: firebrick;\n  font-size: var(--font-small);\n  text-align: center;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin: 5% 0%;\n"])));
var Button = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: var(--font-small);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: var(--color-gray);\n  width: 23%;\n  padding: 3% 2%;\n  border-radius: 30px;\n  &.next {\n    margin-left: 5%;\n    padding: 3% 7%;\n    background-color: var(--color-main);\n  }\n"], ["\n  font-size: var(--font-small);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: var(--color-gray);\n  width: 23%;\n  padding: 3% 2%;\n  border-radius: 30px;\n  &.next {\n    margin-left: 5%;\n    padding: 3% 7%;\n    background-color: var(--color-main);\n  }\n"])));
var ButtonBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3%;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
