"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counsel = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../Global/Layout");
var SurveyHeader_1 = require("../../Global/SurveyHeader");
var io_1 = require("react-icons/io");
var react_router_dom_1 = require("react-router-dom");
var Counsel = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader title={"1:1 문의"} undoPage={"/about"}/>
      <TopTitleBox>
        도움이 필요하신가요?
        <PostBtn onClick={function () { return navigate("/about/counsel/request"); }}>
          질문하기
        </PostBtn>
      </TopTitleBox>
      <BoardCtn>
        {" "}
        <BoardBox>
          <div>
            <BoardTitle>담당자 배정은 언제되나요?</BoardTitle>
            <TimeTxt>3시간 전</TimeTxt>
          </div>

          <DetailBtn>
            <div>댓글 2</div>
            <io_1.IoIosArrowForward className="icon" size={26}/>
          </DetailBtn>
        </BoardBox>
      </BoardCtn>
    </Layout_1.Layout>);
};
exports.Counsel = Counsel;
var BoardCtn = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 60%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  flex-direction: column;\n  overflow-y: scroll;\n"], ["\n  height: 60%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  /* justify-content: center; */\n  flex-direction: column;\n  overflow-y: scroll;\n"])));
var TopTitleBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 35%;\n  font-size: 20px;\n  padding: 10% 5%;\n"], ["\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 35%;\n  font-size: 20px;\n  padding: 10% 5%;\n"])));
var PostBtn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  background-color: var(--color-sub);\n  color: white;\n  border-radius: 20px;\n  padding: 2% 4%;\n"], ["\n  font-size: 16px;\n  background-color: var(--color-sub);\n  color: white;\n  border-radius: 20px;\n  padding: 2% 4%;\n"])));
var BoardBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  padding: 5%;\n  border: 1px solid var(--color-lightSub);\n  border-radius: 20px;\n  margin-top: 5%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  padding: 5%;\n  border: 1px solid var(--color-lightSub);\n  border-radius: 20px;\n  margin-top: 5%;\n"])));
var BoardTitle = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 20px;\n"], ["\n  font-size: 20px;\n"])));
var TimeTxt = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: var(--color-main);\n  font-size: 14px;\n  font-weight: 400;\n"], ["\n  color: var(--color-main);\n  font-size: 14px;\n  font-weight: 400;\n"])));
var DetailBtn = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-main);\n  .icon {\n    color: var(--color-gray);\n    :hover {\n      color: var(--color-darkGray);\n    }\n  }\n"], ["\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-main);\n  .icon {\n    color: var(--color-gray);\n    :hover {\n      color: var(--color-darkGray);\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
