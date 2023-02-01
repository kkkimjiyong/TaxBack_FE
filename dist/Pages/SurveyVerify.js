"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyVerify = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var HomeTax_Logo_png_1 = require("../Assets/Image/HomeTax_Logo.png");
var tb_1 = require("react-icons/tb");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("../Global/Layout");
var SurveyHeader_1 = require("../Global/SurveyHeader");
var react_router_dom_2 = require("react-router-dom");
var SurveyVerify = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var type = (0, react_router_dom_2.useParams)().type;
    // 설문지종류에 따른 텍스트 변동
    var SurveyType;
    if (type === "transfer") {
        SurveyType = "양도소득세";
    }
    else {
        SurveyType = "종합부동산세";
    }
    return (<Layout_1.Layout>
      <Wrap>
        <SurveyHeader_1.SurveyHeader title={"".concat(SurveyType, " \uD658\uAE09\uBC1B\uAE30")} undoPage={"/survey/start/".concat(type)}/>
        <ContentTxt className="top">
          기억이 잘 나지 않거나 모르겠다면 <br />
          <span>홈택스 연결</span>을 통해 <br /> 도움을 받을 수 있어요.
        </ContentTxt>
        <ConnectBtn>
          <HomeTaxImg src={HomeTax_Logo_png_1.default} alt="홈택스로고"/>
          홈택스 연결하기
        </ConnectBtn>
        <ContentTxt>법인사업자이신가요?</ContentTxt>
        <ConnectBtn>
          <tb_1.TbCertificate className="icon" size={40}/>
          공동인증서 연결하기
        </ConnectBtn>
        <BottomBtn onClick={function () { return navigate("/survey/".concat(type)); }}>
          {type === "transfer" ? "양도소득세" : "종합부동산세"} 환급 설문하기
        </BottomBtn>
      </Wrap>
    </Layout_1.Layout>);
};
exports.SurveyVerify = SurveyVerify;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var ContentTxt = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 90%;\n  font-weight: 600;\n  margin-top: 5%;\n  &.top {\n    margin-top: 40%;\n  }\n"], ["\n  width: 90%;\n  font-weight: 600;\n  margin-top: 5%;\n  &.top {\n    margin-top: 40%;\n  }\n"])));
var ConnectBtn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 700;\n  margin: 5% auto;\n  width: 90%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  border: 1.5px solid var(--color-main);\n  color: var(--color-thickSub);\n  .icon {\n    color: var(--color-thickSub);\n    margin-right: 15px;\n  }\n"], ["\n  font-size: 16px;\n  font-weight: 700;\n  margin: 5% auto;\n  width: 90%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  border: 1.5px solid var(--color-main);\n  color: var(--color-thickSub);\n  .icon {\n    color: var(--color-thickSub);\n    margin-right: 15px;\n  }\n"])));
var HomeTaxImg = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: 10px;\n  height: 70%;\n"], ["\n  margin-right: 10px;\n  height: 70%;\n"])));
var BottomBtn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 80%;\n  bottom: 3%;\n  font-size: 1rem;\n  margin: 0 auto;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  &.estateButton {\n    bottom: 12%;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: absolute;\n  width: 80%;\n  bottom: 3%;\n  font-size: 1rem;\n  margin: 0 auto;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  &.estateButton {\n    bottom: 12%;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
