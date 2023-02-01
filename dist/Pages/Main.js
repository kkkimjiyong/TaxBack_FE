"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Taxback_Main_Logo_png_1 = require("../Assets/Image/Taxback_Main_Logo.png");
var Taxback_Main_Box_png_1 = require("../Assets/Image/Taxback_Main_Box.png");
var kakao_login_medium_wide_png_1 = require("../Assets/Image/kakao_login_medium_wide.png");
var BackGround_Logo_png_1 = require("../Assets/Image/BackGround_Logo.png");
var Layout_1 = require("../Global/Layout");
var react_router_dom_1 = require("react-router-dom");
var Main = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      {" "}
      <BackGroundImg src={BackGround_Logo_png_1.default} alt={"바탕로고"}/>
      <Wrap>
        {" "}
        <Img src={Taxback_Main_Logo_png_1.default} alt="로고"/>{" "}
        <MainTextBox>
          TaxBack에서
          <br />
          무료로 조회하고
          <br />
          최저 수수료로
          <br />
          세금 환급 받기
        </MainTextBox>
        <img className="boxLogo" src={Taxback_Main_Box_png_1.default} alt="박스로고"/>
        <img onClick={function () { return navigate("/survey"); }} className="kakao" src={kakao_login_medium_wide_png_1.default} alt="카카오로그인"/>
        <SmallTextBox onClick={function () { return navigate("/survey"); }}>
          이메일로 회원가입 | 로그인
        </SmallTextBox>
      </Wrap>
    </Layout_1.Layout>);
};
exports.Main = Main;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 80%;\n  height: 100%;\n  .boxLogo {\n    @media screen and (max-height: 819px) {\n      transform: scale(0.7);\n    }\n    @media screen and (max-height: 735px) {\n      width: 50%;\n      margin-left: 25%;\n    }\n    @media screen and (max-height: 693px) {\n      display: none;\n    }\n\n    transform: scale(1);\n    margin-left: 15%;\n    margin-bottom: 4%;\n  }\n  .kakao {\n    transform: scale(1);\n    width: 92%;\n    margin-left: 3%;\n    margin-top: 30%;\n    @media screen and (max-height: 819px) {\n      margin-top: 1%;\n    }\n    @media screen and (max-height: 693px) {\n      margin-top: 25%;\n    }\n    :hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  position: relative;\n  width: 80%;\n  height: 100%;\n  .boxLogo {\n    @media screen and (max-height: 819px) {\n      transform: scale(0.7);\n    }\n    @media screen and (max-height: 735px) {\n      width: 50%;\n      margin-left: 25%;\n    }\n    @media screen and (max-height: 693px) {\n      display: none;\n    }\n\n    transform: scale(1);\n    margin-left: 15%;\n    margin-bottom: 4%;\n  }\n  .kakao {\n    transform: scale(1);\n    width: 92%;\n    margin-left: 3%;\n    margin-top: 30%;\n    @media screen and (max-height: 819px) {\n      margin-top: 1%;\n    }\n    @media screen and (max-height: 693px) {\n      margin-top: 25%;\n    }\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])));
var BackGroundImg = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: -1;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: -1;\n"])));
var Img = styled_components_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transform: scale(1.2);\n  margin-top: 10%;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  transform: scale(1.2);\n  margin-top: 10%;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var MainTextBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 5% 0 5% 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-main);\n"], ["\n  margin: 5% 0 5% 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-main);\n"])));
var SmallTextBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 92.5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 3%;\n  margin-top: 3%;\n  padding: 4% 0;\n  color: var(--color-main);\n  border: 1px solid var(--color-main);\n  border-radius: 25px;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"], ["\n  width: 92.5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 3%;\n  margin-top: 3%;\n  padding: 4% 0;\n  color: var(--color-main);\n  border: 1px solid var(--color-main);\n  border-radius: 25px;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
