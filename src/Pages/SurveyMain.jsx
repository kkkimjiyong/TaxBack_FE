import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackColumnLogo from "../Assets/Image/logo_Column_TaxBack.png";
import TaxBackRowLogo from "../Assets/Image/logo_TaxBack.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";

const SurveyMain = () => {
  const navigate = useNavigate();

  // 기존 택스백 url로 연결
  const TaxBack = () => {
    window.location.href = "https://apply.tax-back.kr/";
  };
  return (
    <Layout>
      <MainHeader title={"환급받기"} />
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <LogoImage src={TaxBackColumnLogo} alt="로고" />
      <LogoImage className="rowLogo" src={TaxBackRowLogo} alt="로고" />
      <ButtonCtn>
        {" "}
        <ButtonLabel>
          <span>법인세, 소득세</span> 환급을 원하세요?
        </ButtonLabel>
        <LookUpButton
          onClick={() => navigate("/survey/select/business")}
          // onClick={TaxBack}
        >
          사업자 세금 환급받기
        </LookUpButton>
      </ButtonCtn>
      <ButtonCtn>
        <ButtonLabel>
          <span>양도세, 종부세</span> 환급을 원하세요?
        </ButtonLabel>
        <LookUpButton onClick={() => navigate("/survey/select/assign")}>
          <span></span>양도세 및 종부세 환급받기
        </LookUpButton>
      </ButtonCtn>
      <NavBar />
    </Layout>
  );
};

export default SurveyMain;

const LogoImage = styled.img`
  @media screen and (min-height: 850px) {
    margin-top: 15%;
  }
  margin-top: 5%;
  transform: scale(1);
  &.rowLogo {
    display: none;
    @media screen and (max-height: 730px) {
      transform: scale(0.8);
      display: block;
    }
    @media screen and (max-height: 634px) {
      display: none;
    }
  }
  @media screen and (max-height: 730px) {
    display: none;
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const ButtonCtn = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 20px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
