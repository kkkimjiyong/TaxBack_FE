import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../../Global/NavBar";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { BusinessModal } from "../Business/BusinessModal";
import { AssignButton } from "./AssignButton";

export const SelectBody = ({ kind }) => {
  const navigate = useNavigate();

  // 사업자세금 - 사업장 정보 모달창
  const [modal, setModal] = useState(false);

  // 평균 환급액
  let average = 1234567;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Wrap>
      {" "}
      <SurveyHeader
        undoPage={`/survey`}
        title={`${
          kind === "business" ? "사업자 세금" : "양도세 및 종부세"
        } 환급받기`}
      />
      <ContentBox>
        세무법인 프라이어의 <br />
        세무사들에게
        <br />
        평균 <span>{averageNumber}</span>원을
        <br />
        환급 받았어요
      </ContentBox>
      {kind === "assign" && (
        <SelectBtn onClick={() => navigate(`/survey/start/assign/transfer`)}>
          양도소득세로 환급받기
        </SelectBtn>
      )}
      {kind === "business" && (
        <AssignButton type={"corporation"} setModal={setModal} />
      )}
      {kind === "assign" && (
        <SelectBtn onClick={() => navigate(`/survey/start/assign/estate`)}>
          종합부동산세로 환급받기
        </SelectBtn>
      )}
      {kind === "business" && (
        <AssignButton type={"person"} setModal={setModal} />
      )}
      <BusinessModal setModal={setModal} modal={modal} />
      <NavBar />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70%;
  margin-top: 40%;
`;

const ContentBox = styled.div`
  text-align: center;
  width: 90%;
  padding: 5% 0;
  margin-bottom: 10%;
  border-radius: 20px;
  color: var(--color-thickSub);
  background-color: var(--color-contentBox);
`;

const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-main);
  width: 90%;
  border: 1px solid var(--color-main);
  height: 60px;
  border-radius: 40px;
  :hover {
    background-color: var(--color-main);
    color: white;
    opacity: 1;
    cursor: pointer;
  }
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  color: var(--color-thickSub);
  width: 100%;
  height: 50%;
  background-color: var(--color-lightSub);
  opacity: 0.5;
  &.transfer {
    background-color: var(--color-thickSub);
    color: white;
  }
  :hover {
    background-color: var(--color-main);
    color: white;
    opacity: 1;
  }
`;
