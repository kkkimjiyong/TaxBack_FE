import React from "react";
import TaxBackText from "../Assets/Image/TaxBack_Text.png";
import TaxBackBox from "../Assets/Image/Taxback_Main_Box.png";
import PriorLogo from "../Assets/Image/Prior_Logo.png";
import PriorPeople from "../Assets/Image/Prior_People.png";
import TaxBackResult from "../Assets/Image/Transfer_Result.png";
import InfoMain3 from "../Assets/Image/info3-removebg-preview.png";
import InfoMain4 from "../Assets/Image/Transfer_Done.png";
import { MainHeader } from "../Global/MainHeader";
import styled from "styled-components";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";

//! 간헐적으로 코드가 너무 길어질 것 같아, 클래스네임을 썼습니다.
//! 컴포넌트를 나누려다가, 텍스트와 이미지를 보여주는 단순한 페이지이기 때문에 나누지 않았습니다.
export const InfoMain = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HeaderBox>
        <img className="img" src={TaxBackText} alt="TaxBack" />
        <div>
          <MainHeader />
        </div>
      </HeaderBox>
      <Wrap>
        <img className="taxbackbox " src={TaxBackBox} alt="택스백" />
        <FirstTxtBox>
          세무법인 프라이어에서 <br />
          숨어있던 <span>100만원</span>을 찾아보세요
        </FirstTxtBox>
        <FirstBtn onClick={() => navigate("/survey")}>
          환급 받으러 가기
        </FirstBtn>
        <SecondCtn>
          <img className="priorlogo" src={PriorLogo} alt="prior" />
          <img className="priorpeople" src={PriorPeople} alt="대표님들" />

          <SecondContentTitle>
            세무법인 프라이어에는 수많은 <br />
            세금 전문가들이 함께합니다.
          </SecondContentTitle>
          <SecondContentSub>
            국세청 출신 및 분야 별 전문 세무사 9명,
            <br />
            숙련된 전문 세무 직원 50명이 최대한의 환급 금액을 <br />
            찾아드리고 사후관리까지 책임집니다.
          </SecondContentSub>
        </SecondCtn>
        <ThirdCtn>
          <ThirdTitle>
            세금환급 종합플랫폼
            <br />
            TaxBack
            <br />
            제공 서비스
          </ThirdTitle>
          <ThirdRefundTitle>종합소득세 환급 | 개인사업자</ThirdRefundTitle>
          <ThirdRefundBox>
            <div>
              <div className="flex">
                <div className="number">58</div>
                <div className="unit percent">%</div>
              </div>
              <div className="subtxt">환급 발생 비율</div>
            </div>
            <div>
              <div className="flex">
                <div className="number">234</div>
                <div className="unit">만원</div>
              </div>
              <div className="subtxt">평균 환급금액</div>
            </div>
          </ThirdRefundBox>
          <ThirdCommentBox>
            {" "}
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
            <div className="comment">
              택스백에서는 수임 동의를 받지 않아 안심하고
              <br />
              환급받을 수 있었어요. 다른 곳에서는 조회만 해도 <br />
              세무대리인이 바뀐다고 해서 망설여지더라고요.
            </div>
            <div className="person">병원 A사 원장님</div>
          </ThirdCommentBox>

          <ThirdRefundTitle>
            양도소득세 환급 | 양도소득세 신고자
          </ThirdRefundTitle>
          <ThirdRefundBox>
            <div>
              <div className="flex">
                <div className="number">61</div>
                <div className="unit percent">%</div>
              </div>
              <div className="subtxt">환급 발생 비율</div>
            </div>
            <div>
              <div className="flex">
                <div className="number">1150</div>
                <div className="unit">만원</div>
              </div>
              <div className="subtxt">평균 환급금액</div>
            </div>
          </ThirdRefundBox>
          <ThirdCommentBox>
            {" "}
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
            <div className="comment">
              택스백에서는 수임 동의를 받지 않아 안심하고
              <br />
              환급받을 수 있었어요. 다른 곳에서는 조회만 해도 <br />
              세무대리인이 바뀐다고 해서 망설여지더라고요.
            </div>
            <div className="person">다주택자 A님</div>
          </ThirdCommentBox>
        </ThirdCtn>
        <FourthCtn>
          <ThirdTitle>
            TaxBack으로
            <br />
            환급 받아야 하는 이유
          </ThirdTitle>
          <div className="flex">
            <img className="img1" src={TaxBackBox} alt="TaxBack" />
            <FourthTextBox>
              <div className="title">다양한 세금 환급 조회</div>
              <div className="content">
                IT기반의 토탈 경정청구 서비스는
                <br />
                TaxBack이 최초! 한번 가입으로
                <br />
                다양한 세금 환급 조회 가능
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img2" src={TaxBackResult} alt="TaxBack" />
            <FourthTextBox>
              <div className="title">추가 절세 Point</div>
              <div className="content">
                간편한 인증 및 설문을 통해 별도 증빙
                <br />
                서류 준비없이 5개년 세금에 대해
                <br />
                추가 절세 Point를 찾아내요
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img3" src={InfoMain3} alt="TaxBack" />
            <FourthTextBox>
              <div className="title">IT 기반의 높은 환급액</div>
              <div className="content">
                간편한 인증 및 설문을 통해 별도 증빙
                <br />
                서류 준비없이 5개년 세금에 대해
                <br />
                추가 절세 Point를 찾아내요
              </div>
            </FourthTextBox>
          </div>
          <div className="flex">
            <img className="img4" src={InfoMain4} alt="TaxBack" />
            <FourthTextBox>
              <div className="title">전문적인 세무서비스</div>
              <div className="content">
                대형 세무법인 프라이어가
                <br />
                직접 운영하는 서비스로 사후관리까지
                <br />
                양질의 세무서비스를 제공
              </div>
            </FourthTextBox>
          </div>
        </FourthCtn>
        <FifthCtn>
          <div className="title">
            TaxBack을 통해
            <br />
            숨은 환급금을 찾아보세요!
          </div>
          <FirstBtn onClick={() => navigate("/survey")} className="fifth">
            환급 받으러 가기
          </FirstBtn>
        </FifthCtn>
      </Wrap>
      <NavBar />
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

const Wrap = styled.div`
  margin-bottom: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .taxbackbox {
    margin: 8% 0;
  }
`;

const HeaderBox = styled.div`
  margin-top: 5%;
  padding: 0 2%;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  .img {
    width: 30%;
    margin-top: 3%;
  }
`;

const FirstTxtBox = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4%;
`;

const FirstBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: 30px;
  padding: 3% 0;
  color: white;
  background-color: var(--color-main);
  margin-bottom: 18%;
  margin-right: 50%;
  &.fifth {
    margin-bottom: 0;
  }
  :hover {
    cursor: pointer;
  }
`;

const SecondCtn = styled.div`
  width: 100%;
  padding: 12% 0%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1e2a41;
  .priorlogo {
    margin-bottom: 10%;
    width: 30%;
  }
  .priorpeople {
    width: 100%;
  }
`;

const SecondContentTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 10% 0;
  color: white;
  width: 90%;
`;

const SecondContentSub = styled.div`
  color: white;
  width: 90%;
  font-size: 16px;
`;

const ThirdCtn = styled.div`
  padding: 12% 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dcdcdc;
`;

const ThirdTitle = styled.div`
  width: 90%;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--color-main);
`;

const ThirdRefundTitle = styled.div`
  font-weight: 700;
  width: 90%;
  margin-top: 10%;
  padding: 3% 0;
  color: var(--color-thickSub);
  border-bottom: 1px solid var(--color-thickSub);
`;

const ThirdRefundBox = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-thickSub);
  position: relative;
  .flex {
    display: flex;
  }
  .number {
    font-size: 80px;
    font-weight: 400;
    text-align: start;
  }
  .unit {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 8%;
    font-weight: 500;
    font-size: 30px;
  }
  .percent {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 12%;
    font-weight: 500;
    font-size: 30px;
  }
  .subtxt {
    position: absolute;
    font-size: 14px;
    padding-left: 1%;
    bottom: 0;
  }
`;

const ThirdCommentBox = styled.div`
  width: 75%;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
  margin-top: 8%;
  .title {
    color: var(--color-main);
    font-size: 20px;
    margin-bottom: 15px;
  }
  .comment {
    font-size: 15px;
    line-height: 150%;
  }
  .person {
    margin-top: 5%;
    font-size: 14px;
    color: #6b6b6b;
  }
`;

const FourthCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 12% 0;
  background-color: #f2f1f6;
  .flex {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10%;
  }
  .title {
    font-weight: 700;
    color: var(--color-main);
  }
  .content {
    margin-top: 5px;
    font-size: 14px;
    letter-spacing: -0.2px;
    color: var(--color-thickSub);
  }
  .img1 {
    width: 35%;
  }
  .img2 {
    width: 35%;
    margin-right: 8%;
    margin-left: -3%;
  }
  .img3 {
    width: 35%;
  }
  .img4 {
    width: 35%;
  }
`;

const FourthTextBox = styled.div`
  width: 60%;
`;

const FifthCtn = styled.div`
  padding: 10% 0;
  width: 90%;
  .title {
    color: var(--color-main);
    font-weight: 700;
    font-size: 24px;
    width: 90%;
    margin-bottom: 20px;
  }
`;
