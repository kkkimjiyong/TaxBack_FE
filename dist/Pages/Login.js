"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../Global/Layout");
var io_1 = require("react-icons/io");
var Login_png_1 = require("../Assets/Image/Login.png");
var react_router_dom_1 = require("react-router-dom");
var Login = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      <IconBox>
        <io_1.IoIosArrowBack onClick={function () { return navigate("/"); }} size={30}/>
      </IconBox>
      <HeadTxt>로그인</HeadTxt>
      <Img src={Login_png_1.default} alt="로그인"/>
      <InputBox>
        <Label for="passwordConfirm">이메일</Label>
        <Input type={"password"} placeholder="예) abc@gmail.com"/>{" "}
      </InputBox>
      <InputBox>
        <Label for="password">비밀번호</Label>
        <Input type={"password"} placeholder="영문, 숫자 조합 8~16자"/>{" "}
      </InputBox>
      <FlexBox>
        <div className="inner">
          <input type={"checkbox"}/>
          <div>로그인 상태 유지</div>
        </div>
        <div className="smallTxt">아이디 | 비밀번호 찾기</div>
      </FlexBox>
      <LoginBtn>로그인 하기</LoginBtn>
      <SignUpTxt>
        아직 회원이 아니신가요?&nbsp;<span> 가입하기</span>
      </SignUpTxt>
    </Layout_1.Layout>);
};
exports.Login = Login;
var IconBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 10%;\n  width: 92%;\n  display: flex;\n  color: var(--color-thickSub);\n"], ["\n  margin-top: 10%;\n  width: 92%;\n  display: flex;\n  color: var(--color-thickSub);\n"])));
var HeadTxt = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 24px;\n  font-weight: 600;\n  width: 90%;\n  color: var(--color-thickSub);\n"], ["\n  font-size: 24px;\n  font-weight: 600;\n  width: 90%;\n  color: var(--color-thickSub);\n"])));
var Img = styled_components_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 10%;\n  width: 40%;\n  @media screen and (max-height: 795px) {\n    margin-top: 5%;\n    width: 30%;\n  }\n  @media screen and (max-height: 670px) {\n    display: none;\n  }\n"], ["\n  margin-top: 10%;\n  width: 40%;\n  @media screen and (max-height: 795px) {\n    margin-top: 5%;\n    width: 30%;\n  }\n  @media screen and (max-height: 670px) {\n    display: none;\n  }\n"])));
var InputBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin: 15px 0;\n  width: 80%;\n  height: 5%;\n  padding: 5%;\n  background-color: var(--color-inputBox);\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin: 15px 0;\n  width: 80%;\n  height: 5%;\n  padding: 5%;\n  background-color: var(--color-inputBox);\n"])));
var Label = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"], ["\n  font-size: 16px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"])));
var Input = styled_components_1.default.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 14px;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  padding: 2% 0%;\n"], ["\n  font-size: 14px;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  padding: 2% 0%;\n"])));
var FlexBox = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  .inner {\n    display: flex;\n    color: var(--color-thickSub);\n    font-weight: 600;\n    :hover {\n      cursor: pointer;\n    }\n  }\n  .smallTxt {\n    font-weight: 400;\n    :hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  .inner {\n    display: flex;\n    color: var(--color-thickSub);\n    font-weight: 600;\n    :hover {\n      cursor: pointer;\n    }\n  }\n  .smallTxt {\n    font-weight: 400;\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])));
var LoginBtn = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 82%;\n  padding: 4%;\n  margin-top: 25%;\n  @media screen and (max-height: 730px) {\n    margin-top: 15%;\n  }\n  background-color: var(--color-gray);\n  color: white;\n  border-radius: 40px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 82%;\n  padding: 4%;\n  margin-top: 25%;\n  @media screen and (max-height: 730px) {\n    margin-top: 15%;\n  }\n  background-color: var(--color-gray);\n  color: white;\n  border-radius: 40px;\n"])));
var SignUpTxt = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: 10px;\n  font-size: 14px;\n  display: flex;\n  text-align: center;\n"], ["\n  margin-top: 10px;\n  font-size: 14px;\n  display: flex;\n  text-align: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
