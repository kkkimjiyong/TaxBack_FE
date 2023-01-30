import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../GlobalStyle/Layout";
import { IoIosArrowDown } from "react-icons/io";
import { SelectModal } from "../../Components/About/Counsel/SelectModal";

export const CounselRequest = () => {
  const [selectModal, setSelectModal] = useState();

  return (
    <Layout>
      <Wrap>
        <CloseBtn>닫기</CloseBtn>
        <HeadTitle>1:1 문의하기</HeadTitle>
        <SelectBox onClick={() => setSelectModal(true)}>
          질문 유형을 선택해주세요
          <IoIosArrowDown size={26} />
        </SelectBox>
        <input></input>
        <div>글작성시 주의사항</div>
        <input></input>
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
  height: 80%;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5% 0;
  margin-top: 5%;
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
