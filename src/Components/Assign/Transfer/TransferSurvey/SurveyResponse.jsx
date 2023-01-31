import React from "react";
import styled from "styled-components";

export const SurveyResponse = ({
  response,
  clicked,
  setClicked,
  index,
  setCheckClick,
  setResponses,
  process,
  responses,
}) => {
  //응답체크햇는 지, 안했는 지 판별함수
  const responseClickHandler = () => {
    setClicked(index);
    setCheckClick(true);
    console.log(responses);
  };
  return (
    <Wrap
      onClick={responseClickHandler}
      className={clicked === index && "clicked"}
    >
      <div>{response.main}</div>
      {response.sub && <SubTxt>{response.sub}</SubTxt>}
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 5% 4%;
  margin: 4% 0;
  border: 1.5px solid var(--color-main);
  border-radius: 10px;
  &.clicked {
    font-weight: 600;
    border: 3px solid var(--color-main);
  }
  :hover {
    cursor: pointer;
  }
`;

const SubTxt = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-main);
`;
