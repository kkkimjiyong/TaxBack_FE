type TsurveyComponent = {
  type: string;
  question: string;

  questionSub?: string;
  responses: {
    main: string;
    secondQuestion?: string;
    secondQuestionInput?: { title: string }[];
  }[];
};

// 1단계
export const Estate_SurveyList: TsurveyComponent[] = [
  // 1-1번 공통질문
  {
    type: "common",
    question: "귀하의 납세의무자 유형은 무엇입니까?",
    responses: [{ main: "개인" }, { main: "법인" }],
  },
  // 1-2번 공통질문

  {
    type: "common",
    question: "재산에 종류는 무엇입니까?",
    responses: [{ main: "주택" }, { main: "토지" }],
  },
  // 1-3번 공통질문
  {
    type: "common",
    question: "공동명의에 해당되는 재산이 있습니까?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
];

//! -------------------- 2단계 개인 + 주택의 경우 ---------------------------
export const Person_House_SurveyList: TsurveyComponent[] = [
  // 1번 공통질문
  {
    type: "personHouse",
    question: "22년 6월 1일 현재 본인명의 주택의 숫자는?",
    questionSub:
      "( 22년 6월 2일 이후 매입한 주택의 경우 주택수에서 제외해주세요. )",
    responses: [
      { main: "1세대 1주택" },
      { main: "2주택" },
      { main: "3주택 이상" },
    ],
  },
  // 2번 공통질문
  {
    type: "personHouse",
    question: "주택 중 일부를 주택임대사업자 및 사업자 등록 하셨나요?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
];

// 개인 + 주택의 경우 + 1세대 1주택
export const Person_House_One_SurveyList: TsurveyComponent[] = [
  {
    type: "personHouseOne",
    question: "1주택 외에 최근에 양도했던 주택이 있습니까?",
    responses: [
      {
        main: "예",
        secondQuestion:
          '"예" 선택시 양도했던 물건 주소지 및 시기를 기입해주세요',
        secondQuestionInput: [{ title: "주소지" }, { title: "양도일" }],
      },
      {
        main: "아니오",
      },
    ],
  },
];

// 개인 + 주택의 경우 + 2주택 + 임대사업자
export const Person_House_Two_Business_SurveyList: TsurveyComponent[] = [
  {
    type: "personHouseTwoBusiness",
    question: "상속 또는 2년 이내 주택을 매입한 사실이 있습니까?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
  {
    type: "personHouseTwoBusiness",
    question: "합산배제신청을 하셨습니까?",
    responses: [
      {
        main: "예",
        secondQuestion:
          '( "예" 선택시 합산배제신청 물건지 주소를 기입해주세요. )',
        secondQuestionInput: [{ title: "물건지 주소" }],
      },
      { main: "아니오" },
    ],
  },
  {
    type: "personHouseTwoBusiness",
    question: "현재 주택임대사업다증록이 말소된 상태입니까?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
];

// 개인 + 주택의 경우 + 2주택 + 임대사업자X
export const Person_House_Two_Normal_SurveyList: TsurveyComponent[] = [
  {
    type: "personHouseTwoNormal",
    question: "상속 또는 2년 이내 주택을 매입한 사실이 있습니까?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
  {
    type: "personHouseTwoNormal",
    question:
      "주택신축판매업자 또는 주택건설업자 보유 미분양주택에 해당합니까?",
    responses: [
      { main: "예" },
      {
        main: "아니오",
        secondQuestion:
          '( "아니오" 선택시 기타 다른 합산배제 대상 사유에 해당하면 기재해주세요. )',
        secondQuestionInput: [{ title: "기타 다른 합산배제 대상" }],
      },
    ],
  },
];

// 개인 + 주택의 경우 + 3주택이상 + 임대사업자X
export const Person_House_Three_Normal_SurveyList: TsurveyComponent[] = [
  {
    type: "personHouseTwoNormal",
    question:
      "주택신축판매업자 또는 주택건설업자 보유 미분양주택에 해당합니까?",
    responses: [
      { main: "예" },
      {
        main: "아니오",
        secondQuestion:
          '( "아니오" 선택시 기타 다른 합산배제 대상 사유에 해당하면 기재해주세요. )',
        secondQuestionInput: [{ title: "기타 다른 합산배제 대상" }],
      },
    ],
  },
];

//? ------------------------ 2단계 개인 + 토지의 경우 ----------------------------

export const Person_Land_SurveyList: TsurveyComponent[] = [
  {
    type: "personLand",
    question:
      "주택법에 따른 주택건설사업자 등록을 한 주택건설사업자에 해당하나요?",
    responses: [{ main: "예" }, { main: "아니오" }],
  },
];
