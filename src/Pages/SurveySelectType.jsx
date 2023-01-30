import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { SelectBody } from "../Components/SurveySelectType/SelectBody";
import { Layout } from "../Global/Layout";
import { NavBar } from "../Global/NavBar";
import { SurveyHeader } from "../Global/SurveyHeader";

export const SelectSurveyType = () => {
  // 사업자세금이냐 양도세 및 종부세냐에 따라 달라짐
  const { kind } = useParams();

  return (
    <Layout>
      <SelectBody kind={kind} />
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
