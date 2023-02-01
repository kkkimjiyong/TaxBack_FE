"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Layout_1 = require("../Global/Layout");
var SurveyHeader_1 = require("../Global/SurveyHeader");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var yup = require("yup");
var axios_1 = require("axios");
var SignUp = function () {
    var _a = (0, react_1.useState)(false), allCheck = _a[0], setAllCheck = _a[1];
    var _b = (0, react_1.useState)(false), essential = _b[0], setEssential = _b[1];
    //yup을 이용한 유효섬겅증방식
    var formSchema = yup.object({
        name: yup
            .string()
            .required("이름을 입력해주세요")
            .min(2, "최소 2자 이상 가능합니다")
            .max(6, "최대 6자 까지만 가능합니다"),
        phoneNumber: yup
            .string()
            .required("전화번호를 입력해주세요")
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "전화번호 양식에 맞게 입력해주세요"),
        email: yup
            .string()
            .email("유효하지 않은 이메일입니다.")
            .required("이메일을 입력해주세요."),
        password: yup
            .string()
            .required("비밀번호를 입력해주세요.")
            .matches(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/, "8~16자, 영문, 숫자, 특수문자 포함"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "비밀번호가 다릅니다.")
            .required("비밀번호를 확인해주세요."),
    });
    // 서버 API 데이터 전송
    var PostUser = function (userInfo) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            try {
                response = axios_1.default.post("http://localhost:3001/signup", {
                    userInfo: userInfo,
                });
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    }); };
    // get요청 연습
    var GetUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            try {
                response = axios_1.default.get("http://localhost:3001/signup/users");
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    }); };
    // 회원가입 submit 핸들러
    var SubmitHandler = function () {
        console.log(getValues());
        PostUser(getValues());
        GetUsers();
    };
    //useForm 설정
    var _c = (0, react_hook_form_1.useForm)({
        mode: "onChange",
        // resolver: yupResolver(formSchema),
    }), register = _c.register, getValues = _c.getValues, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    return (<Layout_1.Layout>
      <Wrap>
        <SurveyHeader_1.SurveyHeader title={"이메일 회원가입"} undoPage={"/"}/>
        <InputBox>
          {" "}
          <Label for="name">이름</Label>
          <Input type={"text"} placeholder="예) 홍길동" {...register("name")}/>
        </InputBox>{" "}
        {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        <InputBox>
          <Label for="phoneNumber">휴대 전화번호</Label>
          <Input type={"number"} placeholder="휴대 전화번호를 입력해주세요" {...register("phoneNumber")}/>
        </InputBox>{" "}
        {errors.phoneNumber && (<ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>)}
        <InputBox>
          <Label for="email">이메일</Label>
          <Input type={"text"} placeholder="예) abc@gmail.com" {...register("email")}/>{" "}
        </InputBox>{" "}
        {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}
        <InputBox>
          {" "}
          <Label for="password">비밀번호</Label>
          <Input type={"password"} placeholder="영문, 숫자, 특수문자 조합 8~16자" {...register("password")}/>
        </InputBox>{" "}
        {errors.password && <ErrorTxt>{errors.password.message}</ErrorTxt>}
        <InputBox>
          <Label for="passwordConfirm">비밀번호 확인</Label>
          <Input type={"password"} placeholder="비밀번호를 한번 더 입력해주세요" {...register("passwordConfirm")}/>{" "}
        </InputBox>{" "}
        {errors.passwordConfirm && (<ErrorTxt>{errors.passwordConfirm.message}</ErrorTxt>)}
        <InputBox>
          <InputTitleBox>
            <Label for="recommend">추천인 아이디</Label>
          </InputTitleBox>
          <Input type={"password"} placeholder="추천인 아이디를 입력해주세요. (선택)" {...register("recommend")}/>
        </InputBox>
        <CheckCtn className="allCheck">
          <input id="allCheck" type={"checkbox"} checked={allCheck} onChange={function () {
            setAllCheck(!allCheck);
            setEssential(!essential);
        }}/>{" "}
          <label for="allCheck">아래 약관에 모두 동의합니다</label>
        </CheckCtn>
        <CheckCtn>
          <input id="essential" type={"checkbox"} checked={essential}/>{" "}
          <label for="essential">[필수] 이용약관 동의</label>
        </CheckCtn>
      </Wrap>
      <DoneBtn onClick={handleSubmit(SubmitHandler)}>회원가입 완료</DoneBtn>
    </Layout_1.Layout>);
};
exports.SignUp = SignUp;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 35%;\n  width: 90%;\n  height: 65%;\n  padding-bottom: 5%;\n  overflow-y: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 35%;\n  width: 90%;\n  height: 65%;\n  padding-bottom: 5%;\n  overflow-y: auto;\n"])));
var InputBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin: 15px 0;\n  width: 90%;\n  height: 8%;\n  padding: 5%;\n  background-color: var(--color-inputBox);\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 10px;\n  margin: 15px 0;\n  width: 90%;\n  height: 8%;\n  padding: 5%;\n  background-color: var(--color-inputBox);\n"])));
var InputTitleBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Input = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 16px;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  padding: 2% 1%;\n"], ["\n  font-size: 16px;\n  border: none;\n  background-color: transparent;\n  height: 100%;\n  padding: 2% 1%;\n"])));
var Label = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 20px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"], ["\n  font-size: 20px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n"])));
var ErrorTxt = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  font-size: 14px;\n  color: var(--color-main);\n"], ["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  font-size: 14px;\n  color: var(--color-main);\n"])));
var CheckCtn = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  &.allCheck {\n    font-size: 20px;\n    color: var(--color-main);\n    margin-bottom: 2%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  &.allCheck {\n    font-size: 20px;\n    color: var(--color-main);\n    margin-bottom: 2%;\n  }\n"])));
var DoneBtn = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  margin: 3% 0;\n  padding: 3%;\n  border: none;\n  border-radius: 25px;\n  background-color: var(--color-gray);\n  color: white;\n  :hover {\n    background-color: var(--color-main);\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  margin: 3% 0;\n  padding: 3%;\n  border: none;\n  border-radius: 25px;\n  background-color: var(--color-gray);\n  color: white;\n  :hover {\n    background-color: var(--color-main);\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
