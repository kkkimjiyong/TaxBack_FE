import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../Global/Layout";
import { IoIosArrowDown } from "react-icons/io";
import { SelectModal } from "../../Components/About/Counsel/SelectModal";
import { IoIosArrowForward } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

export const CounselRequest = () => {
  const [selectModal, setSelectModal] = useState();

  return (
    <Layout>
      <Wrap>
        <CloseBtn>
          <GrFormClose size={34} />
        </CloseBtn>
        <HeadTitle>1:1 문의하기</HeadTitle>
        <SelectBox onClick={() => setSelectModal(true)}>
          질문 유형을 선택해주세요
          <IoIosArrowDown size={26} />
        </SelectBox>
        <TitleInput placeholder="제목을 입력해주세요" />
        <NoticeTxtBox>
          <CloseBtn className="notice">
            <GrFormClose size={26} />
          </CloseBtn>

          <div>글 작성 시 주의해 주세요!</div>
          <NoticeContent>
            상담사에게 불쾌감을 주는 성적인 언행과 비하 발언이나 욕설, 폭언,
            협박, 모욕 등의 언어폭력 등은 통보 없이 삭제돼요
          </NoticeContent>
          <NoticeOperate>
            <div>프라이어 운영정책 보기</div>
            <IoIosArrowForward />
          </NoticeOperate>
        </NoticeTxtBox>
        <ContentInput></ContentInput>
        <div>파일첨부</div>
      </Wrap>
      <div>완료</div>
      <SelectModal selectModal={selectModal} />
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 3% 0;
  margin-top: 5%;
  &.notice {
    margin-top: 0;
    padding: 0;
  }
`;

const HeadTitle = styled.div`
  width: 100%;
  font-size: 26px;
  font-weight: 600;
  color: var(--color-thickSub);
  margin-bottom: 5%;
`;

const SelectBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
`;

const TitleInput = styled.input`
  border: none;
  border-radius: 10px;
  margin-top: 5%;
  padding: 7% 5%;
  width: 90%;
  font-size: 16px;
  font-weight: 600;
  color: black;
  background-color: var(--color-inputBox);
`;

const NoticeTxtBox = styled.div`
  width: 90%;
  border-radius: 15px;
  margin-top: 5%;
  padding: 5%;
  background-color: var(--color-contentBox);
`;

const NoticeContent = styled.div`
  margin: 3% 0;
  font-size: 14.5px;
`;

const NoticeOperate = styled.div`
  font-size: 14px;
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ContentInput = styled.textarea`
  margin-top: 5%;
  width: 90%;
  padding: 5%;
  min-height: 100px;
  height: 30%;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
`;
