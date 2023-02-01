"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../Global/Layout");
var logo_Column_TaxBack_png_1 = require("../Assets/Image/logo_Column_TaxBack.png");
var logo_TaxBack_png_1 = require("../Assets/Image/logo_TaxBack.png");
var BackGround_Logo_png_1 = require("../Assets/Image/BackGround_Logo.png");
var NavBar_1 = require("../Global/NavBar");
var react_router_dom_1 = require("react-router-dom");
var MainHeader_1 = require("../Global/MainHeader");
var SurveyMain = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // 기존 택스백 url로 연결
    var TaxBack = function () {
        window.location.href = "https://apply.tax-back.kr/";
    };
    return (<Layout_1.Layout>
      <MainHeader_1.MainHeader title={"환급받기"}/>
      <BackGroundImg src={BackGround_Logo_png_1.default} alt={"바탕로고"}/>
      <LogoImage src={logo_Column_TaxBack_png_1.default} alt="로고"/>
      <LogoImage className="rowLogo" src={logo_TaxBack_png_1.default} alt="로고"/>
      <ButtonCtn>
        {" "}
        <ButtonLabel>
          <span>법인세, 소득세</span> 환급을 원하세요?
        </ButtonLabel>
        <LookUpButton onClick={function () { return navigate("/survey/select/business"); }}>
          사업자 세금 환급받기
        </LookUpButton>
      </ButtonCtn>
      <ButtonCtn>
        <ButtonLabel>
          <span>양도세, 종부세</span> 환급을 원하세요?
        </ButtonLabel>
        <LookUpButton onClick={function () { return navigate("/survey/select/assign"); }}>
          <span></span>양도세 및 종부세 환급받기
        </LookUpButton>
      </ButtonCtn>
      <NavBar_1.NavBar />
    </Layout_1.Layout>);
};
exports.default = SurveyMain;
var LogoImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media screen and (min-height: 850px) {\n    margin-top: 15%;\n  }\n  margin-top: 5%;\n  transform: scale(1);\n  &.rowLogo {\n    display: none;\n    @media screen and (max-height: 730px) {\n      transform: scale(0.8);\n      display: block;\n    }\n    @media screen and (max-height: 634px) {\n      display: none;\n    }\n  }\n  @media screen and (max-height: 730px) {\n    display: none;\n  }\n"], ["\n  @media screen and (min-height: 850px) {\n    margin-top: 15%;\n  }\n  margin-top: 5%;\n  transform: scale(1);\n  &.rowLogo {\n    display: none;\n    @media screen and (max-height: 730px) {\n      transform: scale(0.8);\n      display: block;\n    }\n    @media screen and (max-height: 634px) {\n      display: none;\n    }\n  }\n  @media screen and (max-height: 730px) {\n    display: none;\n  }\n"])));
var BackGroundImg = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  z-index: -1;\n"], ["\n  width: 100%;\n  position: absolute;\n  z-index: -1;\n"])));
var ButtonCtn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 84%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n"], ["\n  width: 84%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n"])));
var ButtonLabel = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"])));
var LookUpButton = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-decoration: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  height: 50px;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  margin-top: 20px;\n  :hover {\n    color: var(--color-lightSub);\n    cursor: pointer;\n  }\n"], ["\n  text-decoration: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  height: 50px;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  margin-top: 20px;\n  :hover {\n    color: var(--color-lightSub);\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
