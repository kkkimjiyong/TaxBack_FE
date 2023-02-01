"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDone = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../../Global/Layout");
var SurveyHeader_1 = require("../../../Global/SurveyHeader");
var bs_1 = require("react-icons/bs");
var Transfer_Done_png_1 = require("../../../Assets/Image/Transfer_Done.png");
var react_router_dom_1 = require("react-router-dom");
var TransferDone = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    //상담 요청일 상태값
    var _a = (0, react_1.useState)("2022-12-12 10:01"), requestDate = _a[0], setRequestDate = _a[1];
    //연락 가능한 번호 상태값
    var _b = (0, react_1.useState)("02-1234-5678"), requestPhoneNumber = _b[0], setRequestPhoneNumber = _b[1];
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader title={"양도소득세 상담 신청 완료"}/>
      <Wrap>
        <CheckBox>
          <bs_1.BsFillCheckCircleFill className="icon" size={32}/>
        </CheckBox>
        <ClientName>홍길동님</ClientName>
        <DoneText>양도소득세 무료 상담 요청을 완료하였습니다.</DoneText>
        <InfoBox>
          <InfoTitle>상담 요청일</InfoTitle>
          <InfoDetail>{requestDate}</InfoDetail>
        </InfoBox>
        <InfoBox>
          <FlexBox>
            <div className="content">
              {" "}
              <InfoTitle>연락 가능한 번호</InfoTitle>{" "}
              <InfoDetail>{requestPhoneNumber}</InfoDetail>
            </div>
            <InfoButton>버튼</InfoButton>
          </FlexBox>

          <InfoSub>
            해당번호로 연락이 가요. 만약 다른 번호로 연락을 원하신다면 <br />
            수정을 해주세요.
          </InfoSub>
        </InfoBox>
        <InfoBox className="recommendId">
          <FlexBox>
            <div className="content">
              <InfoTitle> 추천인 아이디</InfoTitle>
              <input className="recommendInput" placeholder="추천인 아이디를 입력하세요"/>
            </div>

            <InfoButton className="recommendId">버튼</InfoButton>
          </FlexBox>
        </InfoBox>
        <FlexBox className="ImageBottomBox">
          <Img className="img" src={Transfer_Done_png_1.default} alt="이미지"/>
          <div className="ImageBottomTxt">
            세금 환급 담당자가 <br />
            빠른 시일 내에 연락드릴게요
          </div>
        </FlexBox>
        <ButtonBox>
          <HomeButton onClick={function () { return navigate("/"); }}>홈으로</HomeButton>
          <NextBtn>상담 신청 내역 보기</NextBtn>
        </ButtonBox>
      </Wrap>
    </Layout_1.Layout>);
};
exports.TransferDone = TransferDone;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 90%;\n  height: 80%;\n  padding: 4% 0;\n  margin-top: 30%;\n  overflow-y: scroll;\n"], ["\n  width: 90%;\n  height: 80%;\n  padding: 4% 0;\n  margin-top: 30%;\n  overflow-y: scroll;\n"])));
var CheckBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 90%;\n  .icon {\n    color: var(--color-thickSub);\n  }\n"], ["\n  width: 90%;\n  .icon {\n    color: var(--color-thickSub);\n  }\n"])));
var ClientName = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 90%;\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 3%;\n"], ["\n  width: 90%;\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 3%;\n"])));
var DoneText = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  margin-top: 1%;\n  margin-bottom: 5%;\n  font-weight: 600;\n"], ["\n  width: 90%;\n  margin-top: 1%;\n  margin-bottom: 5%;\n  font-weight: 600;\n"])));
var InfoBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 82%;\n  padding: 2% 5%;\n  border-radius: 10px;\n  margin-top: 2%;\n  background-color: var(--color-inputBox);\n  &.recommendId {\n    height: 8%;\n    .recommendInput {\n      margin-top: 4%;\n      width: 80%;\n      border: none;\n      background-color: transparent;\n    }\n  }\n"], ["\n  width: 82%;\n  padding: 2% 5%;\n  border-radius: 10px;\n  margin-top: 2%;\n  background-color: var(--color-inputBox);\n  &.recommendId {\n    height: 8%;\n    .recommendInput {\n      margin-top: 4%;\n      width: 80%;\n      border: none;\n      background-color: transparent;\n    }\n  }\n"])));
var FlexBox = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .content {\n    width: 80%;\n  }\n  .img {\n    width: 25%;\n  }\n  &.ImageBottomBox {\n    margin-top: 5%;\n    width: 80%;\n    border: 1px solid var(--color-sub);\n    border-radius: 15px;\n    padding: 7%;\n    .ImageBottomTxt {\n      margin-left: 35%;\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .content {\n    width: 80%;\n  }\n  .img {\n    width: 25%;\n  }\n  &.ImageBottomBox {\n    margin-top: 5%;\n    width: 80%;\n    border: 1px solid var(--color-sub);\n    border-radius: 15px;\n    padding: 7%;\n    .ImageBottomTxt {\n      margin-left: 35%;\n    }\n  }\n"])));
var Img = styled_components_1.default.img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  top: 10%;\n  left: 5%;\n"], ["\n  position: absolute;\n  top: 10%;\n  left: 5%;\n"])));
var InfoTitle = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 17px;\n  font-weight: 600;\n"], ["\n  font-size: 17px;\n  font-weight: 600;\n"])));
var InfoSub = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 13px;\n  margin-top: 5%;\n  color: var(--color-thickSub);\n"], ["\n  font-size: 13px;\n  margin-top: 5%;\n  color: var(--color-thickSub);\n"])));
var InfoDetail = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 60%;\n  font-size: 24px;\n  margin-top: 2%;\n  color: var(--color-main);\n"], ["\n  width: 60%;\n  font-size: 24px;\n  margin-top: 2%;\n  color: var(--color-main);\n"])));
var InfoButton = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 15px;\n  font-weight: 500;\n  color: white;\n  width: 20%;\n  height: 100%;\n  padding: 2% 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  background-color: var(--color-gray);\n  &.recommendId {\n    margin-top: 5%;\n  }\n"], ["\n  font-size: 15px;\n  font-weight: 500;\n  color: white;\n  width: 20%;\n  height: 100%;\n  padding: 2% 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  background-color: var(--color-gray);\n  &.recommendId {\n    margin-top: 5%;\n  }\n"])));
var HomeButton = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-weight: 600;\n  color: var(--color-main);\n  border: 2px solid var(--color-main);\n  padding: 3% 12%;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: var(--color-main);\n  border: 2px solid var(--color-main);\n  padding: 3% 12%;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var NextBtn = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-weight: 600;\n  color: white;\n  padding: 5% 10%;\n  border-radius: 30px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.clicked {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: white;\n  padding: 5% 10%;\n  border-radius: 30px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.clicked {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var ButtonBox = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin: 5%;\n"], ["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin: 5%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
