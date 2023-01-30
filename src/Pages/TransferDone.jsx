import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../GlobalStyle/Layout";
import { SurveyHeader } from "../GlobalStyle/SurveyHeader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TransferImage1 from "../Assets/Image/Transfer_Done.png";
import { useNavigate } from "react-router-dom";

export const TransferDone = () => {
  const navigate = useNavigate();

  //상담 요청일 상태값
  const [requestDate, setRequestDate] = useState("2022-12-12 10:01");
  //연락 가능한 번호 상태값
  const [requestPhoneNumber, setRequestPhoneNumber] = useState("02-1234-5678");

  return (
    <Layout>
      <SurveyHeader title={"양도소득세 상담 신청 완료"} />
      <CheckBox>
        <BsFillCheckCircleFill className="icon" size={32} />
      </CheckBox>
      <ClientName>홍길동님</ClientName>
      <DoneText>양도소득세 무료 상담 요청을 완료하였습니다.</DoneText>
      <InfoBox>
        <InfoTitle>상담 요청일</InfoTitle>
        <InfoDetail>{requestDate}</InfoDetail>
      </InfoBox>
      <InfoBox>
        <FlexBox>
          <div className="content">
            {" "}
            <InfoTitle>연락 가능한 번호</InfoTitle>{" "}
            <InfoDetail>{requestPhoneNumber}</InfoDetail>
          </div>
          <InfoButton>버튼</InfoButton>
        </FlexBox>

        <InfoSub>
          해당번호로 연락이 가요. 만약 다른 번호로 연락을 원하신다면 <br />
          수정을 해주세요.
        </InfoSub>
      </InfoBox>
      <InfoBox className="recommendId">
        <FlexBox>
          <div className="content">
            <InfoTitle> 추천인 아이디</InfoTitle>
            <input
              className="recommendInput"
              placeholder="추천인 아이디를 입력하세요"
            />
          </div>

          <InfoButton className="recommendId">버튼</InfoButton>
        </FlexBox>
      </InfoBox>
      <FlexBox className="ImageBottomBox">
        <Img src={TransferImage1} alt="이미지" />
        <div className="ImageBottomTxt">
          세금 환급 담당자가 <br />
          빠른 시일 내에 연락드릴게요
        </div>
      </FlexBox>
      <ButtonBox>
        <HomeButton onClick={() => navigate("/")}>홈으로</HomeButton>
        <NextBtn>상담 신청 내역 보기</NextBtn>
      </ButtonBox>
    </Layout>
  );
};

const CheckBox = styled.div`
  margin-top: 35%;
  width: 90%;
  .icon {
    color: var(--color-thickSub);
  }
`;

const ClientName = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 600;
  margin-top: 3%;
`;

const DoneText = styled.div`
  width: 90%;
  margin-top: 1%;
  margin-bottom: 5%;
  font-weight: 600;
`;

const InfoBox = styled.div`
  width: 82%;
  padding: 2% 5%;
  border-radius: 10px;
  margin-top: 2%;
  background-color: var(--color-inputBox);
  &.recommendId {
    height: 8%;
    .recommendInput {
      margin-top: 4%;
      width: 80%;
      border: none;
      background-color: transparent;
    }
  }
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
  }
  &.ImageBottomBox {
    margin-top: 5%;
    width: 80%;
    border: 1px solid var(--color-sub);
    border-radius: 15px;
    padding: 7%;
    .ImageBottomTxt {
      margin-left: 35%;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  top: 10%;
  left: 5%;
`;

const InfoTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const InfoSub = styled.div`
  font-size: 13px;
  margin-top: 5%;
  color: var(--color-thickSub);
`;

const InfoDetail = styled.div`
  width: 60%;
  font-size: 24px;
  margin-top: 2%;
  color: var(--color-main);
`;

const InfoButton = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;
  width: 20%;
  height: 100%;
  padding: 2% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: var(--color-gray);
  &.recommendId {
    margin-top: 5%;
  }
`;

const HomeButton = styled.div`
  font-weight: 600;
  color: var(--color-main);
  border: 2px solid var(--color-main);
  padding: 3% 12%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

const NextBtn = styled.div`
  font-weight: 600;
  color: white;
  padding: 5% 10%;
  border-radius: 30px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    margin-left: 10px;
  }
  &.clicked {
    background-color: var(--color-main);
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;
