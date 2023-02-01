"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignStart = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SurveyHeader_1 = require("../../Global/SurveyHeader");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("../../Global/Layout");
var AssignStart = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var type = (0, react_router_dom_1.useParams)().type;
    // 설문지종류에 따른 텍스트 변동
    var SurveyType;
    if (type === "transfer") {
        SurveyType = "양도소득세";
    }
    else {
        SurveyType = "종합부동산세";
    }
    return (<Layout_1.Layout>
      <Wrap>
        <SurveyHeader_1.SurveyHeader undoPage={"/survey/select/assign"} title={"".concat(SurveyType, " \uD658\uAE09\uBC1B\uAE30")}/>
        <ConsultingBox>
          간단한 설문을 통해 <br /> {SurveyType} 환급여부 알아보기
          <ConsultingBtn>1:1 문의하기</ConsultingBtn>
        </ConsultingBox>
        <TextBox>
          고객님의 {type === "transfer" ? "양도소득세" : "종합부동산세"}의
          정확한 환급을 위해 <br /> 간단한 설문조사를 시행하고 있어요
        </TextBox>
        <TextBox>
          고객님의 환급 가능성을 확인하기 위한 자료로
          <br />
          활용되오니 성실하게 답변해주시면 감사하겠습니다.
        </TextBox>
        <BottomBtn onClick={function () { return navigate("/survey/verify/".concat(type)); }}>
          {SurveyType} 환급 설문하기
        </BottomBtn>
      </Wrap>
    </Layout_1.Layout>);
};
exports.AssignStart = AssignStart;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var ConsultingBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40%;\n  padding: 5% 4%;\n  width: 86%;\n  background-color: var(--color-contentBox);\n  border-radius: 5px;\n  color: var(--color-thickSub);\n  font-weight: 600;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40%;\n  padding: 5% 4%;\n  width: 86%;\n  background-color: var(--color-contentBox);\n  border-radius: 5px;\n  color: var(--color-thickSub);\n  font-weight: 600;\n"])));
var ConsultingBtn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 20px;\n  width: 80px;\n  padding: 2% 1%;\n  border-radius: 30px;\n  background-color: var(--color-sub);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  margin-top: 20px;\n  width: 80px;\n  padding: 2% 1%;\n  border-radius: 30px;\n  background-color: var(--color-sub);\n"])));
var TextBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  text-align: start;\n  margin-top: 5%;\n  font-size: 0.9rem;\n"], ["\n  width: 90%;\n  text-align: start;\n  margin-top: 5%;\n  font-size: 0.9rem;\n"])));
var BottomBtn = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 80%;\n  bottom: 3%;\n  font-size: 1rem;\n  margin: 0 auto;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: absolute;\n  width: 80%;\n  bottom: 3%;\n  font-size: 1rem;\n  margin: 0 auto;\n  font-weight: 600;\n  color: white;\n  border-radius: 25px;\n  background-color: var(--color-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3% 0;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
