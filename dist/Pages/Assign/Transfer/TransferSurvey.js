"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSurvey = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_2 = require("react");
var TransferSurveyList_1 = require("../../../Assets/Survey/TransferSurveyList");
var Layout_1 = require("../../../Global/Layout");
var SurveyResponse_1 = require("../../../Components/Assign/Transfer/TransferSurvey/SurveyResponse");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var ProgressBar_1 = require("../../../Components/Assign/Transfer/TransferSurvey/ProgressBar");
var SurveyHeader_1 = require("../../../Global/SurveyHeader");
var SurveySlice_1 = require("../../../Redux/Modules/SurveySlice");
var react_redux_1 = require("react-redux");
var TransferSurvey = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var dispatch = (0, react_redux_1.useDispatch)();
    // 새로고침 막기 변수
    var preventClose = function (e) {
        e.preventDefault();
        e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
    };
    // 브라우저에 렌더링 시 한 번만 실행하는 코드
    (0, react_1.useEffect)(function () {
        (function () {
            window.addEventListener("beforeunload", preventClose);
        })();
        return function () {
            window.removeEventListener("beforeunload", preventClose);
        };
    }, []);
    // 현재 진행도 상태값
    var _a = (0, react_2.useState)(0), process = _a[0], setProcess = _a[1];
    // 총 진행도 (총 질문의 개수)
    var _b = (0, react_2.useState)(1), totalProcess = _b[0], setTotalProcess = _b[1];
    // 응답체크 판별하는 상태값
    var _c = (0, react_2.useState)(-1), clicked = _c[0], setClicked = _c[1];
    var _d = (0, react_2.useState)(false), checkClick = _d[0], setCheckClick = _d[1];
    // 설문지에 대한 응답값
    var _e = (0, react_2.useState)([]), responses = _e[0], setResponses = _e[1];
    // 설문지 타입정하는 상태값 (토지인지 주택인지)
    var _f = (0, react_2.useState)(), surveyType = _f[0], setSurveyType = _f[1];
    // 질문 바뀌면, 응답 상태값 초기화
    var ResetResponse = function () {
        setClicked(-1);
        setCheckClick(false);
    };
    //  뒤로가기 및 다음버튼 이벤트핸들러
    var ButtonClickHandler = function (direction) {
        // process = 0 일 때, 설문지타입 체크 (토지인지 아파트인지)
        if (process === 0) {
            DivideQuestionHandler();
        }
        // 기존 설문 완료 시, 추가설문 알림
        // "토지" 일 경우, 바로 12번 질문으로
        if (direction === "next" && surveyType === "land" && process === 6) {
            ResetResponse();
            setProcess(11);
        }
        else {
            // 다음버튼 조건식
            if (direction === "next" && checkClick) {
                ResetResponse();
                setProcess(function (prev) { return prev + 1; });
                // 응답 데이터수집
                setResponses(function (prev) {
                    return prev.concat({
                        question: TransferSurveyList_1.Transfer_SurveyList[process].question,
                        response: TransferSurveyList_1.Transfer_SurveyList[process].responses[clicked].main,
                    });
                });
                dispatch((0, SurveySlice_1.addSurveyResponse)({
                    question: TransferSurveyList_1.Transfer_SurveyList[process].question,
                    response: TransferSurveyList_1.Transfer_SurveyList[process].responses[clicked].main,
                }));
                // 설문조사가 끝나고, 추가 설문 알림구현
                if (process === totalProcess) {
                    if (window.confirm("추가 설문을 진행할 경우 환급 확률과 금액이 정확해져요!")) {
                        navigate("/survey/transfer/second/".concat(surveyType));
                    }
                    else {
                        alert("이대로 제출~!");
                        navigate("/");
                    }
                }
            }
            else if (direction === "next" && !checkClick) {
                window.confirm("응답을 해주세요");
            }
        }
        if (direction === "back" && surveyType === "land" && process === 11) {
            ResetResponse();
            setProcess(6);
        }
        else {
            // 뒤로가기 버튼 조건식
            if (direction === "back" && process > 0) {
                ResetResponse();
                setProcess(function (prev) { return prev - 1; });
                setResponses(function (prev) { return prev.slice(0, -1); });
            }
            // 설문조사페이지를 나가려고 할 때
            if (direction === "back" && process <= 0) {
                if (window.confirm("메인화면으로 가시겠습니까?")) {
                    navigate("/survey");
                }
            }
        }
    };
    // 주택 or 토지 질문별로 구분로직
    var DivideQuestionHandler = function () {
        if (clicked === 0) {
            setSurveyType("house");
            setTotalProcess(10);
        }
        if (clicked === 1) {
            setSurveyType("land");
            setTotalProcess(13);
        }
        if (clicked === 2) {
            setSurveyType("house");
            setTotalProcess(10);
        }
    };
    // //? ----------------------- 알럿창 관리 --------------------------
    // //! ---------------------- 알럿창 상태값관리 ------------------------
    // const [alert, setAlert] = useState();
    // const [rightButtonTxt, setRightButtonTxt] = useState();
    // const [leftButtonTxt, setLeftButtonTxt] = useState();
    // const [rightButtonEvent, setRightButtonEvent] = useState();
    // const [leftButtonEvent, setLeftButtonEvent] = useState();
    // const [contentTxt, setContentTxt] = useState();
    //! 설문이 끝났을 때 알럿창
    // const DoneSurveyAlert = () => {
    //   const SubmitSurveyHandler = () => {
    //     alert("제출완료!");
    //   };
    //   setAlert(true);
    //   setRightButtonTxt("추가 설문 할래요");
    //   setLeftButtonTxt("이대로 제출");
    //   setLeftButtonEvent(SubmitSurveyHandler);
    //   setRightButtonEvent(() => navigate("/survey"));
    //   setContentTxt("추가 설문을 진행할 경우 환급 확률과 금액이 정확해져요.");
    // };
    //! 설문조사 도중 나가게될 경우,
    // const ExitDuringSurveyAlert = () => {
    //   console.log("exit");
    //   setAlert(true);
    //   setRightButtonTxt("계속 진행 할래요");
    //   setLeftButtonTxt("나갈래요");
    //   setLeftButtonEvent(() => navigate("/"));
    //   setRightButtonEvent(setAlert(false));
    //   setContentTxt(
    //     "홈으로 나가게 되면 처음부터 다시 설문을 진행해야해요. 그래도 나가시겠어요?"
    //   );
    // };
    return (<Layout_1.Layout>
      <Wrap>
        <SurveyHeader_1.SurveyHeader undoPage={"/survey/verify/transfer"}/>
        <SurveyContentBox>
          <QuestionBox>{TransferSurveyList_1.Transfer_SurveyList[process].question}</QuestionBox>
          <ResponseBox>
            {TransferSurveyList_1.Transfer_SurveyList[process].responses.map(function (response, index) {
            return (<SurveyResponse_1.SurveyResponse process={process} setResponses={setResponses} index={index} clicked={clicked} setClicked={setClicked} response={response} setCheckClick={setCheckClick} responses={responses}/>);
        })}
          </ResponseBox>
          <ButtonBox>
            <Button onClick={function () { return ButtonClickHandler("back"); }}>뒤로</Button>
            <NextBtn onClick={function () { return ButtonClickHandler("next"); }} className={clicked !== -1 && "clicked"}>
              다음
              <ai_1.AiOutlineArrowRight className="icon"/>
            </NextBtn>
          </ButtonBox>
        </SurveyContentBox>

        {/* 첫 양도 물건 선택 후, 진행바 보여주기  */}
        {process > 0 && (<ProgressBar_1.ProgressBar process={process} totalProcess={totalProcess}/>)}
      </Wrap>{" "}
      {/* 알럿모달에 함수 어케 넘길까 일단 보류  */}
      {/* <AlertModal
          rightButtonTxt={rightButtonTxt}
          leftButtonTxt={leftButtonTxt}
          rightButtonEvent={rightButtonEvent}
          leftButtonEvent={leftButtonEvent}
          alert={alert}
          setAlert={setAlert}
          contentTxt={contentTxt}
        /> */}
    </Layout_1.Layout>);
};
exports.TransferSurvey = TransferSurvey;
var Wrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var SurveyContentBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  height: 90%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"], ["\n  position: relative;\n  height: 90%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var QuestionBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 600;\n  width: 55%;\n  margin-top: 35%;\n  margin-right: 33%;\n  padding: 5% 0%;\n"], ["\n  font-size: 16px;\n  font-weight: 600;\n  width: 55%;\n  margin-top: 35%;\n  margin-right: 33%;\n  padding: 5% 0%;\n"])));
var ResponseBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    display: none; /* Chrome , Safari , Opera */\n  }\n"], ["\n  width: 90%;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    display: none; /* Chrome , Safari , Opera */\n  }\n"])));
var Button = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 600;\n  color: white;\n  padding: 3% 12%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: white;\n  padding: 3% 12%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  :hover {\n    cursor: pointer;\n  }\n"])));
var NextBtn = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-weight: 600;\n  color: white;\n  padding: 3% 22%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  display: flex;\n  align-items: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.clicked {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  font-weight: 600;\n  color: white;\n  padding: 3% 22%;\n  border-radius: 30px;\n  background-color: var(--color-gray);\n  display: flex;\n  align-items: center;\n  .icon {\n    margin-left: 10px;\n  }\n  &.clicked {\n    background-color: var(--color-main);\n    :hover {\n      cursor: pointer;\n    }\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])));
var ButtonBox = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5%;\n"], ["\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
