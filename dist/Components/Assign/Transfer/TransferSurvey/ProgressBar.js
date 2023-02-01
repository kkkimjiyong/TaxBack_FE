"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ProgressBar = function (_a) {
    var process = _a.process, totalProcess = _a.totalProcess;
    return (<Wrap>
      <CurrentTxt>
        {process}/{totalProcess}
      </CurrentTxt>
      <BackgroundBar>
        <CurrentBar style={{ width: "".concat((process / totalProcess) * 100, "%") }}/>
      </BackgroundBar>
    </Wrap>);
};
exports.ProgressBar = ProgressBar;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5%;\n  width: 100%;\n  background-color: var(--color-lightSub);\n"], ["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5%;\n  width: 100%;\n  background-color: var(--color-lightSub);\n"])));
var CurrentTxt = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 5%;\n"], ["\n  margin-right: 5%;\n"])));
var BackgroundBar = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: white;\n  width: 70%;\n  height: 10px;\n  border-radius: 10px;\n"], ["\n  background-color: white;\n  width: 70%;\n  height: 10px;\n  border-radius: 10px;\n"])));
var CurrentBar = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  border-radius: 10px;\n  background-color: var(--color-main);\n"], ["\n  height: 100%;\n  border-radius: 10px;\n  background-color: var(--color-main);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
