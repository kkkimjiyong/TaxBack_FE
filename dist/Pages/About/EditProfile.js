"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProfile = void 0;
var react_1 = require("react");
var Layout_1 = require("../../Global/Layout");
var SurveyHeader_1 = require("../../Global/SurveyHeader");
var EditProfile = function () {
    return (<Layout_1.Layout>
      <SurveyHeader_1.SurveyHeader title={"회원정보"} undoPage={"/about"}/>
    </Layout_1.Layout>);
};
exports.EditProfile = EditProfile;
