import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  SecondaryHouseSurvey,
  SecondaryLandSurvey,
} from "../../../Assets/Survey/TransferSecondarySurvey";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const SecondarySurvey = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  console.log(type);

  const [surveyList, setSurveyList] = useState([]);
  const CheckSurveyList = () => {
    if (type === "land") {
      setSurveyList(SecondaryLandSurvey);
      setTotalProcess(0);
    }
    if (type === "house") {
      setSurveyList(SecondaryHouseSurvey);
      setTotalProcess(1);
    }
  };

  useEffect(() => {
    CheckSurveyList();
    console.log(surveyList);
  }, []);

  //현재 진행도 상태값
  const [process, setProcess] = useState(0);

  //총 진행도 상태값
  const [totalProcess, setTotalProcess] = useState();

  //현재 질문 응답데이터 상태값
  const [response, setResponse] = useState("");

  //추가 설문 토탈 응답데이터 상태값
  const [totalResponses, setTotalResponses] = useState([]);

  const BackButtonHandler = () => {
    if (process === 0) {
      if (window.confirm("메인화면으로 나가시겠습니까?")) {
        navigate("/");
      }
    } else {
      setProcess((prev) => prev - 1);
      setTotalResponses((prev) => prev.slice(0, -1));
    }
  };

  const NextButtonHandler = () => {
    if (process === totalProcess) {
      navigate("/survey/transfer/result");
    }
    if (response.length > 1) {
      setProcess((prev) => prev + 1);
      setTotalResponses((prev) => prev.concat(response));
    } else {
      alert("응답을 해주세요");
    }
  };

  console.log(totalResponses);

  return (
    <Layout>
      <SurveyHeader />
      <QuestionBox>{surveyList[process]?.question}</QuestionBox>
      <TextArea
        onChange={(e) => setResponse(e.target.value)}
        placeholder="예: 일시적 2주택 상태로 비과세가 가능하다고 생각하였으나, 비과세 받지 못함."
      />
      <ButtonBox>
        <Button onClick={BackButtonHandler}>뒤로</Button>
        <NextBtn
          onClick={NextButtonHandler}
          className={response.length > 1 && "written"}
        >
          다음
          <AiOutlineArrowRight className="icon" />
        </NextBtn>
      </ButtonBox>
    </Layout>
  );
};

const QuestionBox = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  margin-top: 35%;
  padding: 5% 0%;
`;

const TextArea = styled.textarea`
  line-height: 1.5;
  width: 85%;
  height: 35%;
  margin-bottom: 5%;
  padding: 5% 2%;
  border-radius: 15px;
  border: 1px solid var(--color-gray);
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;

const Button = styled.div`
  font-weight: 600;
  color: white;
  padding: 3% 12%;
  border-radius: 30px;
  background-color: var(--color-gray);
  :hover {
    cursor: pointer;
  }
`;

const NextBtn = styled.div`
  font-weight: 600;
  color: white;
  padding: 3% 22%;
  border-radius: 30px;
  background-color: var(--color-gray);
  display: flex;
  align-items: center;
  .icon {
    margin-left: 10px;
  }
  &.written {
    background-color: var(--color-main);
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    cursor: pointer;
  }
`;
