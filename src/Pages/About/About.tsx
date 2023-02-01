import React from "react";
import styled from "styled-components";
import { Layout } from "../../Global/Layout";
import { MainHeader } from "../../Global/MainHeader";
import { IoIosArrowForward } from "react-icons/io";
import { NavBar } from "../../Global/NavBar";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <MainHeader title={"더 보기"} />
      <Wrap>
        <MoreCtn>
          <MoreList onClick={() => navigate("/about/apply")}>
            내 환급 신청 내역
            <IoIosArrowForward className="icon" size={30} />
          </MoreList>
          <MoreList onClick={() => navigate("/about/editprofile")}>
            프로필 수정
            <IoIosArrowForward className="icon" size={30} />
          </MoreList>
          <MoreList>
            알림 설정
            <IoIosArrowForward className="icon" size={30} />
          </MoreList>
          <MoreList>
            로그아웃
            <IoIosArrowForward className="icon" size={30} />
          </MoreList>
        </MoreCtn>
        <FlexBox>
          <GridBox>공지사항</GridBox>
          <GridBox>자주 묻는 질문</GridBox>
        </FlexBox>
        <FlexBox>
          <GridBox>이용 가이드</GridBox>
          <GridBox>버전 2.72 (최신)</GridBox>
        </FlexBox>
        <HelpText>도움이 필요하신가요?</HelpText>
        <HelpCallBtn onClick={() => navigate("/about/counsel")}>
          1:1 문의하기
        </HelpCallBtn>
        <QuitText>탈퇴하기</QuitText>
      </Wrap>
      <NavBar />
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 78%;
  @media screen and (max-height: 730px) {
    height: 72%;
    margin-top: 3%;
  }
`;

const MoreCtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 7%;
`;

const MoreList = styled.div`
  font-weight: 500;
  width: 87%;
  padding: 5% 0%;
  @media screen and (max-height: 730px) {
    padding: 3% 0%;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  :hover {
    border-bottom: 1px solid #999999;
    font-weight: 600;
    cursor: pointer;
  }
  .icon {
    color: var(--color-gray);
    :hover {
      color: #999999;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  width: 90%;
  height: 12%;
  margin-top: 5%;
`;

const GridBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
  margin: 2%;
  width: 100%;
  height: 100%;
  background-color: #f4f2fd;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;

const HelpText = styled.div`
  margin-top: 10%;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-main);
`;

const HelpCallBtn = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: var(--color-main);
  color: white;
  padding: 3% 0;
  border-radius: 25px;
  :hover {
    cursor: pointer;
  }
`;

const QuitText = styled.div`
  margin: 3% 0;
  font-size: 14px;
  color: var(--color-gray);
  :hover {
    cursor: pointer;
  }
`;
