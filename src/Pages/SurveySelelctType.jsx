import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../GlobalStyle/Layout";
import { NavBar } from "../GlobalStyle/NavBar";
import { SurveyHeader } from "../GlobalStyle/SurveyHeader";

export const SelectSurveyType = () => {
  const navigate = useNavigate();

  // 평균 환급액
  let average = 1234567;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Layout>
      <SurveyHeader
        undoPage={"/survey"}
        title={"양도소득세 및 종부세 환급받기"}
      />
      <Wrap>
        <ContentBox>
          세무법인 프라이어의 <br />
          세무사들에게
          <br />
          평균 <span>{averageNumber}</span>원을
          <br />
          환급 받았어요
        </ContentBox>
        <SelectBtn onClick={() => navigate("/survey/start/transfer")}>
          양도소득세로 환급받기
        </SelectBtn>
        <SelectBtn onClick={() => navigate("/survey/start/estate")}>
          종합부동산세로 환급받기
        </SelectBtn>
      </Wrap>
      <NavBar />
    </Layout>
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
  padding: 10% 0;
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
