type TSecondartObject = { type: String; question: String; placeholder: string };

// 양도세 => 아파트 추가설문지
export const SecondaryHouseSurvey: TSecondartObject[] = [
  {
    type: "house",
    question: "경정청구한 이유를 적어주세요",
    placeholder:
      "예: 일시적 2주택 상태로 비과세가 가능하다고 생각하였으나, 비과세 받지 못함.",
  },
  {
    type: "house",
    question:
      "양도세 신고당시 귀하께서 예상했던 세액과 차이가 있었거나, 특이사항이 있었던 경우 그 내용을 적어주세요.",
    placeholder: "설명을 간단하게 적어주세요.",
  },
];

// 양도세 => 토지 추가설문지

export const SecondaryLandSurvey: TSecondartObject[] = [
  {
    type: "land",
    question:
      "양도세 신고당시 귀하께서 예상했던 세액과 차이가 있었거나, 특이사항이 있었던 경우 그 내용을 적어주세요.",
    placeholder: "설명을 간단하게 적어주세요.",
  },
];
