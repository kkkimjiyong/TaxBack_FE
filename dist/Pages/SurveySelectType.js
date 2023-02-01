"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectSurveyType = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var SelectBody_1 = require("../Components/SurveySelectType/SelectBody");
var Layout_1 = require("../Global/Layout");
var NavBar_1 = require("../Global/NavBar");
var SurveyHeader_1 = require("../Global/SurveyHeader");
var SelectSurveyType = function () {
    // 사업자세금이냐 양도세 및 종부세냐에 따라 달라짐
    var kind = (0, react_router_dom_1.useParams)().kind;
    return (<Layout_1.Layout>
      <SelectBody_1.SelectBody kind={kind}/>
    </Layout_1.Layout>);
};
exports.SelectSurveyType = SelectSurveyType;
