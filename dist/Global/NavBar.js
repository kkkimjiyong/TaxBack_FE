"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var hi_1 = require("react-icons/hi");
var ri_1 = require("react-icons/ri");
var bs_1 = require("react-icons/bs");
var NavBar = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Wrap>
      <FlexBox>
        <div>
          <hi_1.HiHome className="icon" onClick={function () { return navigate("/survey"); }} size={26}/>
        </div>
        홈
      </FlexBox>
      <FlexBox>
        <div>
          <ri_1.RiMoneyDollarCircleFill className="icon" size={26}/>
        </div>
        환급하기
      </FlexBox>
      <FlexBox onClick={function () { return navigate("/about"); }}>
        <div>
          <bs_1.BsThreeDots className="icon"/>
        </div>
        더보기
      </FlexBox>
    </Wrap>);
};
exports.NavBar = NavBar;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  font-weight: 600;\n  width: 500px;\n  margin: 0 auto;\n  padding: 5px 0;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0px -12px 20px -15px gray;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-color: white;\n"], ["\n  position: fixed;\n  bottom: 0;\n  font-weight: 600;\n  width: 500px;\n  margin: 0 auto;\n  padding: 5px 0;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0px -12px 20px -15px gray;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-color: white;\n"])));
var FlexBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .icon {\n    color: var(--color-thickSub);\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .icon {\n    color: var(--color-thickSub);\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2;
