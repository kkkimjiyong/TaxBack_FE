import React from "react";
import styled from "styled-components";
import { Layout } from "../../Global/Layout";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Counsel = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <SurveyHeader title={"1:1 문의"} undoPage={"/about"} />
      <TopTitleBox>
        도움이 필요하신가요?
        <PostBtn onClick={() => navigate("/about/counsel/request")}>
          질문하기
        </PostBtn>
      </TopTitleBox>
      <BoardCtn>
        {" "}
        <BoardBox>
          <div>
            <BoardTitle>담당자 배정은 언제되나요?</BoardTitle>
            <TimeTxt>3시간 전</TimeTxt>
          </div>

          <DetailBtn>
            <div>댓글 2</div>
            <IoIosArrowForward className="icon" size={26} />
          </DetailBtn>
        </BoardBox>
      </BoardCtn>
    </Layout>
  );
};

const BoardCtn = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow-y: scroll;
`;

const TopTitleBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35%;
  font-size: 20px;
  padding: 10% 5%;
`;

const PostBtn = styled.div`
  font-size: 16px;
  background-color: var(--color-sub);
  color: white;
  border-radius: 20px;
  padding: 2% 4%;
`;

const BoardBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 5%;
  border: 1px solid var(--color-lightSub);
  border-radius: 20px;
  margin-top: 5%;
`;

const BoardTitle = styled.div`
  font-size: 20px;
`;

const TimeTxt = styled.div`
  color: var(--color-main);
  font-size: 14px;
  font-weight: 400;
`;

const DetailBtn = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-main);
  .icon {
    color: var(--color-gray);
    :hover {
      color: var(--color-darkGray);
    }
  }
`;
