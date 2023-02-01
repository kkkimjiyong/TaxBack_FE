"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDone = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Transfer_Done_png_1 = require("../Assets/Image/Transfer_Done.png");
var Layout_1 = require("../Global/Layout");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var SignUpDone = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      <Header>
        회원 가입 완료 <ai_1.AiFillCheckCircle className="icon"/>
      </Header>
      <ContentBox>
        <img className="img" src={Transfer_Done_png_1.default} alt="완료이미지"/>
        <ContentTxt>
          <span>홍길동</span>님의 회원가입을 <br />
          축하드려요
        </ContentTxt>
        <div>5초 후 홈 화면으로 이동합니다</div>
      </ContentBox>{" "}
      <HomeBtn onClick={function () { return navigate("/"); }}>홈 화면으로 이동하기</HomeBtn>
    </Layout_1.Layout>);
};
exports.SignUpDone = SignUpDone;
var Header = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  margin-top: 80px;\n  color: var(--color-thickSub);\n  font-size: 24px;\n  font-weight: 600;\n  .icon {\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  margin-top: 80px;\n  color: var(--color-thickSub);\n  font-size: 24px;\n  font-weight: 600;\n  .icon {\n    margin-left: 10px;\n  }\n"])));
var ContentBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 90%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  .img {\n    width: 80%;\n    margin-top: 10%;\n    @media screen and (max-height: 730px) {\n      width: 60%;\n    }\n  }\n"], ["\n  width: 90%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  .img {\n    width: 80%;\n    margin-top: 10%;\n    @media screen and (max-height: 730px) {\n      width: 60%;\n    }\n  }\n"])));
var ContentTxt = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  font-size: 24px;\n  margin: 5% 0;\n"], ["\n  text-align: center;\n  font-size: 24px;\n  margin: 5% 0;\n"])));
var HomeBtn = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  padding: 3%;\n  margin-bottom: 5%;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 30px;\n  background-color: var(--color-main);\n  color: white;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  padding: 3%;\n  margin-bottom: 5%;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 30px;\n  background-color: var(--color-main);\n  color: white;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
