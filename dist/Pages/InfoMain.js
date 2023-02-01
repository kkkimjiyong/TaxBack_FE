"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoMain = void 0;
var react_1 = require("react");
var TaxBack_Text_png_1 = require("../Assets/Image/TaxBack_Text.png");
var Taxback_Main_Box_png_1 = require("../Assets/Image/Taxback_Main_Box.png");
var Prior_Logo_png_1 = require("../Assets/Image/Prior_Logo.png");
var Prior_People_png_1 = require("../Assets/Image/Prior_People.png");
var Transfer_Result_png_1 = require("../Assets/Image/Transfer_Result.png");
var info3_removebg_preview_png_1 = require("../Assets/Image/info3-removebg-preview.png");
var Transfer_Done_png_1 = require("../Assets/Image/Transfer_Done.png");
var MainHeader_1 = require("../Global/MainHeader");
var styled_components_1 = require("styled-components");
var NavBar_1 = require("../Global/NavBar");
var react_router_dom_1 = require("react-router-dom");
// 간헐적으로 코드가 너무 길어질 것 같아, 클래스네임을 썼습니다.
var InfoMain = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (<Layout>
      <HeaderBox>
        <img className="img" src={TaxBack_Text_png_1.default} alt="TaxBack"/>
        <div>
          <MainHeader_1.MainHeader />
        </div>
      </HeaderBox>
      <Wrap>
        <img className="taxbackbox " src={Taxback_Main_Box_png_1.default} alt="택스백"/>
        <FirstTxtBox>
          세무법인 프라이어에서 <br />
          숨어있던 <span>100만원</span>을 찾아보세요
        </FirstTxtBox>
        <FirstBtn onClick={function () { return navigate("/survey"); }}>
          환급 받으러 가기
        </FirstBtn>
        <SecondCtn>
          <img className="priorlogo" src={Prior_Logo_png_1.default} alt="prior"/>
          <img className="priorpeople" src={Prior_People_png_1.default} alt="대표님들"/>
          <div>
            <SecondContentTitle>
              세무법인 프라이어에는 수많은 <br />
              세금 전문가들이 함께합니다.
            </SecondContentTitle>
            <SecondContentSub>
              국세청 출신 및 분야 별 전문 세무사 9명,
              <br />
              숙련된 전문 세무 직원 50명이 최대한의 환급 금액을 <br />
              찾아드리고 사후관리까지 책임집니다.
            </SecondContentSub>
          </div>
        </SecondCtn>
        <ThirdCtn>
          <ThirdTitle>
            세금환급 종합플랫폼
            <br />
            TaxBack
            <br />
            제공 서비스
          </ThirdTitle>
          <ThirdRefundTitle>종합소득세 환급 | 개인사업자</ThirdRefundTitle>
          <ThirdRefundBox>
            <div>
              <div className="flex">
                <div className="number">58</div>
                <div className="unit percent">%</div>
              </div>
              <div className="subtxt">환급 발생 비율</div>
            </div>
            <div>
              <div className="flex">
                <div className="number">234</div>
                <div className="unit">만원</div>
              </div>
              <div className="subtxt">평균 환급금액</div>
            </div>
          </ThirdRefundBox>
          <ThirdCommentBox>
            {" "}
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
            <div className="comment">
              택스백에서는 수임 동의를 받지 않아 안심하고
              <br />
              환급받을 수 있었어요. 다른 곳에서는 조회만 해도 <br />
              세무대리인이 바뀐다고 해서 망설여지더라고요.
            </div>
            <div className="person">병원 A사 원장님</div>
          </ThirdCommentBox>

          <ThirdRefundTitle>
            양도소득세 환급 | 양도소득세 신고자
          </ThirdRefundTitle>
          <ThirdRefundBox>
            <div>
              <div className="flex">
                <div className="number">61</div>
                <div className="unit percent">%</div>
              </div>
              <div className="subtxt">환급 발생 비율</div>
            </div>
            <div>
              <div className="flex">
                <div className="number">1150</div>
                <div className="unit">만원</div>
              </div>
              <div className="subtxt">평균 환급금액</div>
            </div>
          </ThirdRefundBox>
          <ThirdCommentBox>
            {" "}
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
            <div className="comment">
              택스백에서는 수임 동의를 받지 않아 안심하고
              <br />
              환급받을 수 있었어요. 다른 곳에서는 조회만 해도 <br />
              세무대리인이 바뀐다고 해서 망설여지더라고요.
            </div>
            <div className="person">다주택자 A님</div>
          </ThirdCommentBox>
        </ThirdCtn>
        <FourthCtn>
          <ThirdTitle>
            TaxBack으로
            <br />
            환급 받아야 하는 이유
          </ThirdTitle>
          <div className="flex">
            <img className="img1" src={Taxback_Main_Box_png_1.default} alt="TaxBack"/>
            <FourthTextBox>
              <div className="title">다양한 세금 환급 조회</div>
              <div className="content">
                IT기반의 토탈 경정청구 서비스는
                <br />
                TaxBack이 최초! 한번 가입으로
                <br />
                다양한 세금 환급 조회 가능
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img2" src={Transfer_Result_png_1.default} alt="TaxBack"/>
            <FourthTextBox>
              <div className="title">추가 절세 Point</div>
              <div className="content">
                간편한 인증 및 설문을 통해 별도 증빙
                <br />
                서류 준비없이 5개년 세금에 대해
                <br />
                추가 절세 Point를 찾아내요
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img3" src={info3_removebg_preview_png_1.default} alt="TaxBack"/>
            <FourthTextBox>
              <div className="title">IT 기반의 높은 환급액</div>
              <div className="content">
                간편한 인증 및 설문을 통해 별도 증빙
                <br />
                서류 준비없이 5개년 세금에 대해
                <br />
                추가 절세 Point를 찾아내요
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img4" src={Transfer_Done_png_1.default} alt="TaxBack"/>
            <FourthTextBox>
              <div className="title">전문적인 세무서비스</div>
              <div className="content">
                대형 세무법인 프라이어가
                <br />
                직접 운영하는 서비스로 사후관리까지
                <br />
                양질의 세무서비스를 제공
              </div>
            </FourthTextBox>
          </div>
        </FourthCtn>
        <FifthCtn>
          <div className="title">
            TaxBack을 통해
            <br />
            숨은 환급금을 찾아보세요!
          </div>
          <FirstBtn onClick={function () { return navigate("/survey"); }} className="fifth">
            환급 받으러 가기
          </FirstBtn>
        </FifthCtn>
      </Wrap>
      <NavBar_1.NavBar />
    </Layout>);
};
exports.InfoMain = InfoMain;
var Layout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 500px;\n  height: 100%;\n"], ["\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 500px;\n  height: 100%;\n"])));
var Wrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 80px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow-y: scroll;\n  .taxbackbox {\n    margin: 8% 0;\n  }\n"], ["\n  margin-bottom: 80px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow-y: scroll;\n  .taxbackbox {\n    margin: 8% 0;\n  }\n"])));
var HeaderBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 5%;\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  .img {\n    width: 30%;\n    margin-top: 3%;\n  }\n"], ["\n  margin-top: 5%;\n  position: sticky;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  .img {\n    width: 30%;\n    margin-top: 3%;\n  }\n"])));
var FirstTxtBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 4%;\n"], ["\n  width: 90%;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 4%;\n"])));
var FirstBtn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n  border-radius: 30px;\n  padding: 3% 0;\n  color: white;\n  background-color: var(--color-main);\n  margin-bottom: 18%;\n  margin-right: 50%;\n  &.fifth {\n    margin-bottom: 0;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n  border-radius: 30px;\n  padding: 3% 0;\n  color: white;\n  background-color: var(--color-main);\n  margin-bottom: 18%;\n  margin-right: 50%;\n  &.fifth {\n    margin-bottom: 0;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var SecondCtn = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 12% 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #1e2a41;\n  .priorlogo {\n    margin-bottom: 10%;\n    width: 30%;\n  }\n  .priorpeople {\n    width: 100%;\n  }\n"], ["\n  padding: 12% 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #1e2a41;\n  .priorlogo {\n    margin-bottom: 10%;\n    width: 30%;\n  }\n  .priorpeople {\n    width: 100%;\n  }\n"])));
var SecondContentTitle = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 24px;\n  font-weight: 600;\n  margin: 10% 0;\n  color: white;\n"], ["\n  font-size: 24px;\n  font-weight: 600;\n  margin: 10% 0;\n  color: white;\n"])));
var SecondContentSub = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: white;\n"], ["\n  color: white;\n"])));
var ThirdCtn = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 12% 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #dcdcdc;\n"], ["\n  padding: 12% 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #dcdcdc;\n"])));
var ThirdTitle = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 90%;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -1px;\n  color: var(--color-main);\n"], ["\n  width: 90%;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -1px;\n  color: var(--color-main);\n"])));
var ThirdRefundTitle = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-weight: 700;\n  width: 90%;\n  margin-top: 10%;\n  padding: 3% 0;\n  color: var(--color-thickSub);\n  border-bottom: 1px solid var(--color-thickSub);\n"], ["\n  font-weight: 700;\n  width: 90%;\n  margin-top: 10%;\n  padding: 3% 0;\n  color: var(--color-thickSub);\n  border-bottom: 1px solid var(--color-thickSub);\n"])));
var ThirdRefundBox = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 85%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-thickSub);\n  position: relative;\n  .flex {\n    display: flex;\n  }\n  .number {\n    font-size: 80px;\n    font-weight: 400;\n    text-align: start;\n  }\n  .unit {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 8%;\n    font-weight: 500;\n    font-size: 30px;\n  }\n  .percent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 12%;\n    font-weight: 500;\n    font-size: 30px;\n  }\n  .subtxt {\n    position: absolute;\n    font-size: 14px;\n    padding-left: 1%;\n    bottom: 0;\n  }\n"], ["\n  width: 85%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color-thickSub);\n  position: relative;\n  .flex {\n    display: flex;\n  }\n  .number {\n    font-size: 80px;\n    font-weight: 400;\n    text-align: start;\n  }\n  .unit {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 8%;\n    font-weight: 500;\n    font-size: 30px;\n  }\n  .percent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 12%;\n    font-weight: 500;\n    font-size: 30px;\n  }\n  .subtxt {\n    position: absolute;\n    font-size: 14px;\n    padding-left: 1%;\n    bottom: 0;\n  }\n"])));
var ThirdCommentBox = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 75%;\n  padding: 5%;\n  background-color: white;\n  border-radius: 10px;\n  margin-top: 8%;\n  .title {\n    color: var(--color-main);\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .comment {\n    font-size: 15px;\n    line-height: 150%;\n  }\n  .person {\n    margin-top: 5%;\n    font-size: 14px;\n    color: #6b6b6b;\n  }\n"], ["\n  width: 75%;\n  padding: 5%;\n  background-color: white;\n  border-radius: 10px;\n  margin-top: 8%;\n  .title {\n    color: var(--color-main);\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .comment {\n    font-size: 15px;\n    line-height: 150%;\n  }\n  .person {\n    margin-top: 5%;\n    font-size: 14px;\n    color: #6b6b6b;\n  }\n"])));
var FourthCtn = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 90%;\n  padding: 12% 5%;\n  background-color: #f2f1f6;\n  .flex {\n    width: 100%;\n    padding: 0 5%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 10%;\n  }\n  .title {\n    font-weight: 700;\n    color: var(--color-main);\n  }\n  .content {\n    font-size: 16px;\n    color: var(--color-thickSub);\n  }\n  .img1 {\n    width: 30%;\n  }\n  .img2 {\n    width: 35%;\n    margin-right: 8%;\n    margin-left: -3%;\n  }\n  .img3 {\n    width: 35%;\n  }\n  .img4 {\n    width: 35%;\n  }\n"], ["\n  width: 90%;\n  padding: 12% 5%;\n  background-color: #f2f1f6;\n  .flex {\n    width: 100%;\n    padding: 0 5%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 10%;\n  }\n  .title {\n    font-weight: 700;\n    color: var(--color-main);\n  }\n  .content {\n    font-size: 16px;\n    color: var(--color-thickSub);\n  }\n  .img1 {\n    width: 30%;\n  }\n  .img2 {\n    width: 35%;\n    margin-right: 8%;\n    margin-left: -3%;\n  }\n  .img3 {\n    width: 35%;\n  }\n  .img4 {\n    width: 35%;\n  }\n"])));
var FourthTextBox = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  width: 60%;\n"], ["\n  width: 60%;\n"])));
var FifthCtn = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  padding: 10% 0;\n  width: 90%;\n  .title {\n    color: var(--color-main);\n    font-weight: 700;\n    font-size: 24px;\n    width: 90%;\n    margin-bottom: 20px;\n  }\n"], ["\n  padding: 10% 0;\n  width: 90%;\n  .title {\n    color: var(--color-main);\n    font-weight: 700;\n    font-size: 24px;\n    width: 90%;\n    margin-bottom: 20px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
