import React from "react";
import styled from "styled-components";
import TaxBackRowLogo from "../Assets/Image/Taxback_Main_Logo.png";
import TaxBackMainBoxLogo from "../Assets/Image/Taxback_Main_Box.png";
import KaKaoLogin from "../Assets/Image/kakao_login_medium_wide.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { Layout } from "../Global/Layout";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {" "}
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <Wrap>
        {" "}
        <Img src={TaxBackRowLogo} alt="로고" />{" "}
        <MainTextBox>
          TaxBack에서
          <br />
          무료로 조회하고
          <br />
          최저 수수료로
          <br />
          세금 환급 받기
        </MainTextBox>
        <img className="boxLogo" src={TaxBackMainBoxLogo} alt="박스로고" />
        <img
          onClick={() => navigate("/survey")}
          className="kakao"
          src={KaKaoLogin}
          alt="카카오로그인"
        />
        <SmallTextBox onClick={() => navigate("/survey")}>
          이메일로 회원가입 | 로그인
        </SmallTextBox>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  .boxLogo {
    @media screen and (max-height: 819px) {
      transform: scale(0.7);
    }
    @media screen and (max-height: 735px) {
      width: 50%;
      margin-left: 25%;
    }
    @media screen and (max-height: 693px) {
      display: none;
    }

    transform: scale(1);
    margin-left: 15%;
    margin-bottom: 4%;
  }
  .kakao {
    transform: scale(1);
    width: 92%;
    margin-left: 3%;
    margin-top: 30%;
    @media screen and (max-height: 819px) {
      margin-top: 1%;
    }
    @media screen and (max-height: 693px) {
      margin-top: 25%;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
`;

const Img = styled.img`
  transform: scale(1.2);
  margin-top: 10%;
  :hover {
    cursor: pointer;
  }
`;

const MainTextBox = styled.div`
  margin: 5% 0 5% 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-main);
`;

const SmallTextBox = styled.div`
  width: 92.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-left: 3%;
  margin-top: 3%;
  padding: 4% 0;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  border-radius: 25px;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;
