"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../Global/Layout");
var MainHeader_1 = require("../../Global/MainHeader");
var io_1 = require("react-icons/io");
var NavBar_1 = require("../../Global/NavBar");
var react_router_dom_1 = require("react-router-dom");
var About = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      {" "}
      <MainHeader_1.MainHeader title={"더 보기"}/>
      <Wrap>
        {" "}
        <MoreCtn>
          <MoreList onClick={function () { return navigate("/about/apply"); }}>
            내 환급 신청 내역
            <io_1.IoIosArrowForward className="icon" size={30}/>
          </MoreList>
          <MoreList onClick={function () { return navigate("/about/editprofile"); }}>
            프로필 수정
            <io_1.IoIosArrowForward className="icon" size={30}/>
          </MoreList>
          <MoreList>
            알림 설정
            <io_1.IoIosArrowForward className="icon" size={30}/>
          </MoreList>
          <MoreList>
            로그아웃
            <io_1.IoIosArrowForward className="icon" size={30}/>
          </MoreList>
        </MoreCtn>
        <FlexBox>
          <GridBox>공지사항</GridBox>
          <GridBox>자주 묻는 질문</GridBox>
        </FlexBox>
        <FlexBox>
          <GridBox>이용 가이드</GridBox>
          <GridBox>버전 2.72 (최신)</GridBox>
        </FlexBox>
        <HelpText>도움이 필요하신가요?</HelpText>
        <HelpCallBtn onClick={function () { return navigate("/about/counsel"); }}>
          1:1 문의하기
        </HelpCallBtn>
        <QuitText>탈퇴하기</QuitText>
      </Wrap>
      <NavBar_1.NavBar />
    </Layout_1.Layout>);
};
exports.About = About;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow-y: hidden;\n  overflow-y: scroll;\n  width: 100%;\n  height: 78%;\n  @media screen and (max-height: 730px) {\n    height: 72%;\n    margin-top: 3%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow-y: hidden;\n  overflow-y: scroll;\n  width: 100%;\n  height: 78%;\n  @media screen and (max-height: 730px) {\n    height: 72%;\n    margin-top: 3%;\n  }\n"])));
var MoreCtn = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 7%;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 7%;\n"])));
var MoreList = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 500;\n  width: 87%;\n  padding: 5% 0%;\n  @media screen and (max-height: 730px) {\n    padding: 3% 0%;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dfdfdf;\n  :hover {\n    border-bottom: 1px solid #999999;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  .icon {\n    color: var(--color-gray);\n    :hover {\n      color: #999999;\n    }\n  }\n"], ["\n  font-weight: 500;\n  width: 87%;\n  padding: 5% 0%;\n  @media screen and (max-height: 730px) {\n    padding: 3% 0%;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dfdfdf;\n  :hover {\n    border-bottom: 1px solid #999999;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  .icon {\n    color: var(--color-gray);\n    :hover {\n      color: #999999;\n    }\n  }\n"])));
var FlexBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  width: 90%;\n  height: 12%;\n  margin-top: 5%;\n"], ["\n  display: flex;\n  width: 90%;\n  height: 12%;\n  margin-top: 5%;\n"])));
var GridBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  border-radius: 10px;\n  margin: 2%;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f2fd;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  border-radius: 10px;\n  margin: 2%;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f2fd;\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"])));
var HelpText = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 10%;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-main);\n"], ["\n  margin-top: 10%;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--color-main);\n"])));
var HelpCallBtn = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  background-color: var(--color-main);\n  color: white;\n  padding: 3% 0;\n  border-radius: 25px;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  margin-top: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  background-color: var(--color-main);\n  color: white;\n  padding: 3% 0;\n  border-radius: 25px;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var QuitText = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 3% 0;\n  font-size: 14px;\n  color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  margin: 3% 0;\n  font-size: 14px;\n  color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
