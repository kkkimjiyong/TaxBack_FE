import React from "react";
import styled from "styled-components";
import HomeTaxLogo from "../Assets/Image/HomeTax_Logo.png";
import { TbCertificate } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Layout } from "../GlobalStyle/Layout";
import { SurveyHeader } from "../GlobalStyle/SurveyHeader";
import { useParams } from "react-router-dom";

export const SurveyVerify = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  // 설문지종류에 따른 텍스트 변동
  let SurveyType;
  if (type === "transfer") {
    SurveyType = "양도소득세";
  } else {
    SurveyType = "종합부동산세";
  }

  return (
    <Layout>
      <Wrap>
        <SurveyHeader
          title={`${SurveyType} 환급받기`}
          undoPage={`/survey/start/${type}`}
        />
        <ContentTxt className="top">
          기억이 잘 나지 않거나 모르겠다면 <br />
          <span>홈택스 연결</span>을 통해 <br /> 도움을 받을 수 있어요.
        </ContentTxt>
        <ConnectBtn>
          <HomeTaxImg src={HomeTaxLogo} alt="홈택스로고" />
          홈택스 연결하기
        </ConnectBtn>
        <ContentTxt>법인사업자이신가요?</ContentTxt>
        <ConnectBtn>
          <TbCertificate className="icon" size={40} />
          공동인증서 연결하기
        </ConnectBtn>
        <BottomBtn onClick={() => navigate(`/survey/${type}`)}>
          {type === "transfer" ? "양도소득세" : "종합부동산세"} 환급 설문하기
        </BottomBtn>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentTxt = styled.div`
  width: 90%;
  font-weight: 600;
  margin-top: 10%;
  &.top {
    margin-top: 40%;
  }
`;

const ConnectBtn = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 5% auto;
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1.5px solid var(--color-main);
  color: var(--color-thickSub);
  .icon {
    color: var(--color-thickSub);
    margin-right: 15px;
  }
`;

const HomeTaxImg = styled.img`
  margin-right: 10px;
  height: 70%;
`;

const BottomBtn = styled.div`
  position: absolute;
  width: 80%;
  bottom: 3%;
  font-size: 1rem;
  margin: 0 auto;
  font-weight: 600;
  color: white;
  border-radius: 25px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  &.estateButton {
    bottom: 12%;
  }
  :hover {
    cursor: pointer;
  }
`;
