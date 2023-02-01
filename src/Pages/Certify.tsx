import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { NavBar } from "../Global/NavBar";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Certify = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrap>
        <Header>
          <IoIosArrowBack
            className="icon"
            onClick={() => navigate("/survey")}
            size={30}
          />
          <BsFillBellFill className="icon" size={30} />
        </Header>{" "}
        <Title>인증하기</Title>
        <TitleHelp>환급을 받기 위해선 인증이 필요해요</TitleHelp>
        <ContentBox>
          <ButtonLabel>
            <span>법인 사업자 </span>세금 환급을 원한다면
          </ButtonLabel>
          <CertifyBtn>공동 인증하기</CertifyBtn>
          <ButtonLabel>
            <span>개인 사업자</span> 세금 환급을 원한다면
          </ButtonLabel>
          <CertifyBtn>간편 인증하기</CertifyBtn>
        </ContentBox>
      </Wrap>
      <NavBar />
    </Layout>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: 90%;
  margin-top: 10%;
`;

const Header = styled.div`
  width: 100%;
  margin: 3% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-main);
  .icon {
    :hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: var(--color-thickSub);
`;

const TitleHelp = styled.div`
  margin-top: 2%;
  font-size: 14px;
  color: var(--color-gray);
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60%;
`;

const ButtonLabel = styled.div`
  margin-top: 10%;
`;

const CertifyBtn = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  border-radius: 40px;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;
