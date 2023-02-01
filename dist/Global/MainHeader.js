"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainHeader = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var bs_1 = require("react-icons/bs");
var react_router_dom_1 = require("react-router-dom");
var MainHeader = function (_a) {
    var title = _a.title;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Wrap>
      <HeaderTxt> {title}</HeaderTxt>

      <FlexBox>
        <ShareBox onClick={function () { return navigate("/certify"); }}>공동인증센터</ShareBox>{" "}
        <bs_1.BsFillBellFill className="icon" size={30}/>
      </FlexBox>
    </Wrap>);
};
exports.MainHeader = MainHeader;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  justify-content: space-between;\n  padding-top: 10%;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  justify-content: space-between;\n  padding-top: 10%;\n"])));
var HeaderTxt = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--color-thickSub);\n"], ["\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--color-thickSub);\n"])));
var ShareBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  border: 2px solid var(--color-sub);\n  color: var(--color-sub);\n  padding: 2% 5%;\n  width: 100px;\n  border-radius: 25px;\n  margin-right: 15px;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-sub);\n    color: white;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  border: 2px solid var(--color-sub);\n  color: var(--color-sub);\n  padding: 2% 5%;\n  width: 100px;\n  border-radius: 25px;\n  margin-right: 15px;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-sub);\n    color: white;\n  }\n"])));
var FlexBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  .icon {\n    color: var(--color-thickSub);\n  }\n"], ["\n  display: flex;\n  .icon {\n    color: var(--color-thickSub);\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
