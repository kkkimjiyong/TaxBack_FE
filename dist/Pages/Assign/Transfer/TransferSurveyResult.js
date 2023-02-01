"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSurveyResult = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../../../Global/Layout");
var SurveyHeader_1 = require("../../../Global/SurveyHeader");
var Transfer_Result_png_1 = require("../../../Assets/Image/Transfer_Result.png");
var TextModal_1 = require("../../../Global/TextModal");
var react_router_dom_1 = require("react-router-dom");
var TransferSurveyResult = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    //? ---------------------- 법적 근거 텍스트 모달 ------------------------------
    // 모달 상태값 관리
    var _a = (0, react_1.useState)(), activeModal = _a[0], setActiveModal = _a[1];
    var RefundBasisButtonHandler = function () {
        setActiveModal(true);
    };
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader undoPage={"/"}/>
      <TextBox>
        <span className="dark">홍길동</span>님은
      </TextBox>
      <TextBox className="subText">
        2주택자 조정지역 매매에 속하므로 <br />
        <span className="dark">환급 가능성이 있어요.</span>
      </TextBox>
      <LookUpBtn onClick={RefundBasisButtonHandler}>
        환급근거 살펴보기
      </LookUpBtn>
      <ImageBox>
        <img src={Transfer_Result_png_1.default} alt="이미지"/>
        <ImageTextBox>
          지금까지 같은 Case의 고객님 중 88%가 <br />
          <span className="bold">양도소득세 환급신청</span>으로
          <br />
          평균 1,123,345원을 환급 받았어요.
        </ImageTextBox>
      </ImageBox>
      <BottomBtn onClick={function () { return navigate("/survey/transfer/done"); }}>
        양도소득세 무료 상담하기
      </BottomBtn>
      <TextModal_1.TextModal active={activeModal} setActive={setActiveModal}/>
    </Layout_1.Layout>);
};
exports.TransferSurveyResult = TransferSurveyResult;
var TextBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 600;\n  width: 55%;\n  margin-top: 35%;\n  margin-right: 33%;\n  &.subText {\n    margin-top: 3%;\n    font-size: 16px;\n  }\n"], ["\n  font-size: 20px;\n  font-weight: 600;\n  width: 55%;\n  margin-top: 35%;\n  margin-right: 33%;\n  &.subText {\n    margin-top: 3%;\n    font-size: 16px;\n  }\n"])));
var LookUpBtn = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 67%;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: white;\n  margin-top: 20px;\n  padding: 2.2% 2.5%;\n  border-radius: 30px;\n  background-color: var(--color-midSub);\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 67%;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: white;\n  margin-top: 20px;\n  padding: 2.2% 2.5%;\n  border-radius: 30px;\n  background-color: var(--color-midSub);\n"])));
var ImageBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  height: 35%;\n  border-radius: 15px;\n  background-color: #fcf4f0;\n  margin-top: 5%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  height: 35%;\n  border-radius: 15px;\n  background-color: #fcf4f0;\n  margin-top: 5%;\n"])));
var ImageTextBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: center;\n  margin-top: 2%;\n  width: 90%;\n"], ["\n  text-align: center;\n  margin-top: 2%;\n  width: 90%;\n"])));
var BottomBtn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 8%;\n  width: 80%;\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  margin-top: 8%;\n  width: 80%;\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
