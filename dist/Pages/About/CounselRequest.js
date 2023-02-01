"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounselRequest = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../Global/Layout");
var io_1 = require("react-icons/io");
var SelectModal_1 = require("../../Components/About/Counsel/SelectModal");
var io_2 = require("react-icons/io");
var gr_1 = require("react-icons/gr");
var CounselRequest = function () {
    var _a = (0, react_1.useState)(), selectModal = _a[0], setSelectModal = _a[1];
    return (<Layout_1.Layout>
      <Wrap>
        <CloseBtn>
          <gr_1.GrFormClose size={34}/>
        </CloseBtn>
        <HeadTitle>1:1 문의하기</HeadTitle>
        <SelectBox onClick={function () { return setSelectModal(true); }}>
          질문 유형을 선택해주세요
          <io_1.IoIosArrowDown size={26}/>
        </SelectBox>
        <TitleInput placeholder="제목을 입력해주세요"/>
        <NoticeTxtBox>
          <CloseBtn className="notice">
            <gr_1.GrFormClose size={26}/>
          </CloseBtn>

          <div>글 작성 시 주의해 주세요!</div>
          <NoticeContent>
            상담사에게 불쾌감을 주는 성적인 언행과 비하 발언이나 욕설, 폭언,
            협박, 모욕 등의 언어폭력 등은 통보 없이 삭제돼요
          </NoticeContent>
          <NoticeOperate>
            <div>프라이어 운영정책 보기</div>
            <io_2.IoIosArrowForward />
          </NoticeOperate>
        </NoticeTxtBox>
        <ContentInput></ContentInput>
        <div>파일첨부</div>
      </Wrap>
      <div>완료</div>
      <SelectModal_1.SelectModal selectModal={selectModal}/>
    </Layout_1.Layout>);
};
exports.CounselRequest = CounselRequest;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 90%;\n  height: 90%;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 90%;\n  height: 90%;\n"])));
var CloseBtn = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding: 3% 0;\n  margin-top: 5%;\n  &.notice {\n    margin-top: 0;\n    padding: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding: 3% 0;\n  margin-top: 5%;\n  &.notice {\n    margin-top: 0;\n    padding: 0;\n  }\n"])));
var HeadTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin-bottom: 5%;\n"], ["\n  width: 100%;\n  font-size: 26px;\n  font-weight: 600;\n  color: var(--color-thickSub);\n  margin-bottom: 5%;\n"])));
var SelectBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5%;\n  border: 1px solid var(--color-gray);\n  border-radius: 10px;\n"], ["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5%;\n  border: 1px solid var(--color-gray);\n  border-radius: 10px;\n"])));
var TitleInput = styled_components_1.default.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: none;\n  border-radius: 10px;\n  margin-top: 5%;\n  padding: 7% 5%;\n  width: 90%;\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background-color: var(--color-inputBox);\n"], ["\n  border: none;\n  border-radius: 10px;\n  margin-top: 5%;\n  padding: 7% 5%;\n  width: 90%;\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background-color: var(--color-inputBox);\n"])));
var NoticeTxtBox = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 90%;\n  border-radius: 15px;\n  margin-top: 5%;\n  padding: 5%;\n  background-color: var(--color-contentBox);\n"], ["\n  width: 90%;\n  border-radius: 15px;\n  margin-top: 5%;\n  padding: 5%;\n  background-color: var(--color-contentBox);\n"])));
var NoticeContent = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 3% 0;\n  font-size: 14.5px;\n"], ["\n  margin: 3% 0;\n  font-size: 14.5px;\n"])));
var NoticeOperate = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 14px;\n  color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"], ["\n  font-size: 14px;\n  color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"])));
var ContentInput = styled_components_1.default.textarea(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: 5%;\n  width: 90%;\n  padding: 5%;\n  min-height: 100px;\n  height: 30%;\n  border: 1px solid var(--color-gray);\n  border-radius: 10px;\n"], ["\n  margin-top: 5%;\n  width: 90%;\n  padding: 5%;\n  min-height: 100px;\n  height: 30%;\n  border: 1px solid var(--color-gray);\n  border-radius: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
