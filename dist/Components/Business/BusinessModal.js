"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModal = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var BusinessModal = function (_a) {
    var setModal = _a.setModal, modal = _a.modal;
    return (<Wrap modal={modal}>
      <CloseBtnBox onClick={function () { return setModal(false); }}>
        <div className="closeBtn">X</div>
      </CloseBtnBox>
      <TitleBox>사업장 정보</TitleBox>
      <NoContentTxt>등록된 사업장 정보가 없어요</NoContentTxt>
      <PlusPlace>
        + 새로운 회사 <span>추가하기</span>{" "}
      </PlusPlace>
    </Wrap>);
};
exports.BusinessModal = BusinessModal;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: ", ";\n  width: 100%;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 2px -5px 20px -5px gray;\n  z-index: 11;\n  position: absolute;\n  bottom: 0;\n  transition: all 600ms ease-in-out;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: ", ";\n  width: 100%;\n  background-color: white;\n  border-radius: 20px;\n  box-shadow: 2px -5px 20px -5px gray;\n  z-index: 11;\n  position: absolute;\n  bottom: 0;\n  transition: all 600ms ease-in-out;\n"])), function (_a) {
    var modal = _a.modal;
    return (modal ? "30%" : "0%");
});
var CloseBtnBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 3% 0;\n  width: 90%;\n  display: flex;\n  justify-content: flex-end;\n  .closeBtn {\n    :hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  padding: 3% 0;\n  width: 90%;\n  display: flex;\n  justify-content: flex-end;\n  .closeBtn {\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])));
var TitleBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 2% 0;\n  width: 90%;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n"], ["\n  padding: 2% 0;\n  width: 90%;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n"])));
var NoContentTxt = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  margin-top: 3%;\n  padding: 3% 0;\n  color: var(--color-main);\n"], ["\n  font-size: 14px;\n  margin-top: 3%;\n  padding: 3% 0;\n  color: var(--color-main);\n"])));
var PlusPlace = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 14px;\n  padding: 3% 0;\n"], ["\n  font-size: 14px;\n  padding: 3% 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
