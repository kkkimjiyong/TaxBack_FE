"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyHeader = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var io_1 = require("react-icons/io");
var hi_1 = require("react-icons/hi");
var SurveyHeader = function (_a) {
    var undoPage = _a.undoPage, title = _a.title;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Wrap>
      <HeadIcon>
        <div>
          <io_1.IoIosArrowBack className="icon" onClick={function () { return navigate(undoPage); }} size={30}/>
        </div>
        <div>
          <hi_1.HiHome className="icon" onClick={function () { return navigate("/"); }} size={30}/>
        </div>
      </HeadIcon>{" "}
      <HeadTxt>{title ? "".concat(title) : "양도소득세 환급받기"}</HeadTxt>
    </Wrap>);
};
exports.SurveyHeader = SurveyHeader;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  width: 90%;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 0;\n  width: 90%;\n  z-index: 2;\n"])));
var HeadIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 12% 0% 4% 0%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .icon {\n    color: var(--color-thickSub);\n    :hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  padding: 12% 0% 4% 0%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  .icon {\n    color: var(--color-thickSub);\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])));
var HeadTxt = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-thickSub);\n"], ["\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-thickSub);\n"])));
var templateObject_1, templateObject_2, templateObject_3;
