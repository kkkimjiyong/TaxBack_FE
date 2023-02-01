type TsurveyComponent = {
  type: string;
  question: string;
  questionSub?: string;
  responses: { main: string; sub?: string }[];
};

//양도세 질문리스트
export const Transfer_SurveyList: TsurveyComponent[] = [
  //1번 공통질문
  {
    type: "common",
    question: "양도 물건이 무엇인가요?",
    responses: [
      { main: "아파트/단독주택/상가주택" },
      { main: "토지" },
      { main: "그 외" },
    ],
  },
  //2번 공통질문
  {
    type: "common",
    question: "양도 원인이 무엇인가요?",
    responses: [
      {
        main: "일반매매",
      },
      {
        main: "공공사업에 의한 수용 및 협의양도",
        sub: "- 재건축, 재개발 조합에 양도하거나 환급금(청산금)을 지급받아 신고한 경우 포함",
      },
      { main: "기타", sub: "- 경매, 부담부증여, 교환 등" },
    ],
  },
  //3번 공통질문
  {
    type: "common",
    question: "취득 원인이 무엇인가요?",
    responses: [
      {
        main: "매매 취득",
      },
      {
        main: "상속 취득",
      },
      {
        main: "증여 취득",
      },
      {
        main: "기타",
        sub: "경매취득, 이혼재산분할에 의한 취득, 대물변제, 교환취득 등",
      },
    ],
  },
  //4번 공통질문
  {
    type: "common",
    question: "양도세 신고 당시 양도한 물건의 실제 취득가액을 알고 있나요?",
    responses: [
      {
        main: "예",
      },
      {
        main: "아니요",
      },
    ],
  },
  //5번 공통질문
  {
    type: "common",
    question: "양도한 물건의 보유기간을 알려주세요",
    responses: [
      {
        main: "2년 미만",
      },
      {
        main: "2 - 5년 보유",
      },
      {
        main: "5 - 10년 보유",
      },
      {
        main: "10 - 15년 보유",
      },
      {
        main: "15년 이상",
      },
    ],
  },
  //6번 공통질문
  {
    type: "common",
    question: "양도한 물건의 양도가액을 알려주세요",
    responses: [
      {
        main: "6억원 이하",
      },
      {
        main: "6 - 12억원 이하",
      },
      {
        main: "12 - 20억원 이하",
      },
      {
        main: "20 - 40억원 이하",
      },
      {
        main: "40억원 초과",
      },
    ],
  },
  //7번 공통질문
  {
    type: "common",
    question: "신고주체는 누구인가요?",
    responses: [
      {
        main: "본인",
      },
      {
        main: "세무사",
      },
      {
        main: "회계사",
      },
      {
        main: "기타",
      },
    ],
  },
  //8번 아파트/단독주택/상가주택 선택시
  {
    type: "house",
    question: "양도주택을 양도할 당시 보유한 주택은 총 몇 채 였나요?",
    questionSub:
      "양도한 주택 포함하며, 동거중인 가족의 소유 주택을 모두 포함, 오피스텔과 미등기 무허가 주택을 모두 포함합니다.",
    responses: [
      {
        main: "1채",
      },
      {
        main: "2채",
      },
      {
        main: "3채 이상",
      },
    ],
  },
  //9번 아파트/단독주택/상가주택 선택시
  {
    type: "house",
    question: "양도 물건 신고 당시으 적용 받은 세율을 알려주시오",
    responses: [
      { main: "1세대 1주택 비과세" },
      { main: "일반세율" },
      { main: "2주택 중과세율" },
      { main: "3주택 이상 중과세율" },
      { main: "세율 모르겠음" },
    ],
  },
  //10번 아파트/단독주택/상가주택 선택시
  {
    type: "house",
    question: "양도한 주택에서 거주한 사실이 있습니까?",
    responses: [{ main: "예" }, { main: "아니요" }],
  },
  //11번 아파트/단독주택/상가주택 선택시
  {
    type: "house",
    question: "보유 주택 중 다음에 해당하는 사항을 모두 체크해주세요.",
    responses: [
      { main: "2021년 1월 1일 이후 주택을 양도한 경우" },
      { main: "상속받은 주택" },
      {
        main: "주택임대사업자 등록 주택",
        sub: "- 세무서와 시군구청 모두 등록된 주택",
      },
      { main: "읍, 면지역 소재 주택" },
      { main: "조합원 입주권 주택" },
      { main: "아파트 분양권" },
      { main: "오피스텔" },
      { main: "분양으로 취득한 주택" },
      { main: "부모세대와 자녀세대의 합가로 인하여 증가한 주택" },
      { main: "혼인으로 인하여 증가한 주택" },
      { main: "미분양 상태의 주택을 취득한 경우" },
      { main: "양도한 주택의 양도일 기준 3년 이내에 취득한 주택" },
      { main: "상가주택" },
      { main: "다가구주택" },
      { main: "등본상의 세대원과 실제 동거하는 세대원이 다른 경우" },
      { main: "형제 또는 남매, 자매로만 구성된 세대" },
    ],
  },
  //12번 토지 선택시
  {
    type: "land",
    question: "양도한 토지의 지목은 무엇인가요?",
    responses: [
      {
        main: "대지",
      },
      {
        main: "농지 (전, 답, 과수원 등)",
      },
      {
        main: "임야",
      },
      {
        main: "기타 (공장용지, 목장용지, 잡종지, 도로 등)",
      },
    ],
  },
  //13번 토지 선택시  ** 응답이 이상함 중복됨 아래질문이랑
  {
    type: "land",
    question: "양도한 토지의 실제사용 용도는 무엇입니까?",
    responses: [
      {
        main: "농지 등 감면 받은 경우",
      },
      {
        main: "일반세율",
      },
      {
        main: "비사업용 토지에 대한 중과세율",
      },
    ],
  },
  //14번 토지 선택시
  {
    type: "land",
    question: "양도세 신고 당시 적용받은 세율을 체크하세요.",
    responses: [
      {
        main: "농지 등 감면 받은 경우",
      },
      {
        main: "일반세율",
      },
      {
        main: "비사업용 토지에 대한 중과세율",
      },
    ],
  },
];
