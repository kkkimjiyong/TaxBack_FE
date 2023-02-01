"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certify = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../Global/Layout");
var NavBar_1 = require("../Global/NavBar");
var io_1 = require("react-icons/io");
var bs_1 = require("react-icons/bs");
var react_router_dom_1 = require("react-router-dom");
var Certify = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      <Wrap>
        {" "}
        <Header>
          {" "}
          <io_1.IoIosArrowBack className="icon" onClick={function () { return navigate("/survey"); }} size={30}/>
          <bs_1.BsFillBellFill className="icon" size={30}/>
        </Header>{" "}
        <Title>인증하기</Title>
        <TitleHelp>환급을 받기 위해선 인증이 필요해요</TitleHelp>
        <ContentBox>
          <ButtonLabel>
            <span>법인 사업자 </span>세금 환급을 원한다면
          </ButtonLabel>
          <CertifyBtn>공동 인증하기</CertifyBtn>
          <ButtonLabel>
            <span>개인 사업자</span> 세금 환급을 원한다면
          </ButtonLabel>
          <CertifyBtn>간편 인증하기</CertifyBtn>
        </ContentBox>
      </Wrap>
      <NavBar_1.NavBar />
    </Layout_1.Layout>);
};
exports.Certify = Certify;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 90%;\n  height: 90%;\n  margin-top: 10%;\n"], ["\n  width: 90%;\n  height: 90%;\n  margin-top: 10%;\n"])));
var Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  margin: 3% 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-main);\n  .icon {\n    :hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  width: 100%;\n  margin: 3% 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-main);\n  .icon {\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])));
var Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n"], ["\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n"])));
var TitleHelp = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 2%;\n  font-size: 14px;\n  color: var(--color-gray);\n"], ["\n  margin-top: 2%;\n  font-size: 14px;\n  color: var(--color-gray);\n"])));
var ContentBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 60%;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 60%;\n"])));
var ButtonLabel = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 10%;\n"], ["\n  margin-top: 10%;\n"])));
var CertifyBtn = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  width: 90%;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 40px;\n  color: var(--color-main);\n  border: 1px solid var(--color-main);\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"], ["\n  margin-top: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  width: 90%;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 40px;\n  color: var(--color-main);\n  border: 1px solid var(--color-main);\n  :hover {\n    cursor: pointer;\n    background-color: var(--color-main);\n    color: white;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
