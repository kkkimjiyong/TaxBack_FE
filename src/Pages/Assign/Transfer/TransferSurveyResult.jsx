import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../../GlobalStyle/Layout";
import { SurveyHeader } from "../../../GlobalStyle/SurveyHeader";
import TransferImage from "../../../Assets/Image/Transfer_Result.png";
import { TextModal } from "../../../GlobalStyle/TextModal";
import { useNavigate } from "react-router-dom";

export const TransferSurveyResult = () => {
  const navigate = useNavigate();

  //? ---------------------- 법적 근거 텍스트 모달 ------------------------------
  // 모달 상태값 관리
  const [activeModal, setActiveModal] = useState();
  const RefundBasisButtonHandler = () => {
    setActiveModal(true);
  };

  return (
    <Layout>
      <SurveyHeader undoPage={"/"} />
      <TextBox>
        <span className="dark">홍길동</span>님은
      </TextBox>
      <TextBox className="subText">
        2주택자 조정지역 매매에 속하므로 <br />
        <span className="dark">환급 가능성이 있어요.</span>
      </TextBox>
      <LookUpBtn onClick={RefundBasisButtonHandler}>
        환급근거 살펴보기
      </LookUpBtn>
      <ImageBox>
        <img src={TransferImage} alt="이미지" />
        <ImageTextBox>
          지금까지 같은 Case의 고객님 중 88%가 <br />
          <span className="bold">양도소득세 환급신청</span>으로
          <br />
          평균 1,123,345원을 환급 받았어요.
        </ImageTextBox>
      </ImageBox>
      <BottomBtn onClick={() => navigate("/survey/transfer/done")}>
        양도소득세 무료 상담하기
      </BottomBtn>
      <TextModal active={activeModal} setActive={setActiveModal} />
    </Layout>
  );
};

const TextBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 55%;
  margin-top: 35%;
  margin-right: 33%;
  &.subText {
    margin-top: 3%;
    font-size: 16px;
  }
`;

const LookUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 67%;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  margin-top: 20px;
  padding: 2.2% 2.5%;
  border-radius: 30px;
  background-color: var(--color-midSub);
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35%;
  border-radius: 15px;
  background-color: #fcf4f0;
  margin-top: 5%;
`;

const ImageTextBox = styled.div`
  text-align: center;
  margin-top: 2%;
  width: 90%;
`;

const BottomBtn = styled.div`
  margin-top: 8%;
  width: 80%;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 25px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  :hover {
    cursor: pointer;
  }
`;
