import React from "react";
import { Layout } from "../../Global/Layout";
import { MainHeader } from "../../Global/MainHeader";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const Apply = () => {
  return (
    <Layout>
      <SurveyHeader undoPage={"/about"} title={"내 환급 신청 내역"} />
      <ListCtn>
        <ListBox>
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </ListBox>
      </ListCtn>
    </Layout>
  );
};

const ListCtn = styled.div`
  width: 90%;
  margin-top: 5%;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 5%;
  margin-top: 30%;
  width: 80%;
  border: 1px solid var(--color-main);
  border-radius: 15px;
`;

const ListType = styled.div`
  font-size: 14px;
  color: var(--color-main);
  &.date {
    color: black;
    font-weight: 400;
  }
`;

const ListTitle = styled.div`
  margin: 2px 0;
`;
