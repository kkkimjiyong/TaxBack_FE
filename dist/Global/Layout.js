"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout = function (_a) {
    var children = _a.children;
    return (<FlexBox>
      {" "}
      <Wrap>{children}</Wrap>
    </FlexBox>);
};
exports.Layout = Layout;
var FlexBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"])));
var Wrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px;\n  height: 100%;\n"], ["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px;\n  height: 100%;\n"])));
var templateObject_1, templateObject_2;
