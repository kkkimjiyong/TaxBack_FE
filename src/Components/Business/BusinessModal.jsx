import React from "react";
import styled from "styled-components";

export const BusinessModal = ({ setModal, modal }) => {
  return (
    <Wrap modal={modal}>
      <CloseBtnBox onClick={() => setModal(false)}>
        <div className="closeBtn">X</div>
      </CloseBtnBox>
      <TitleBox>사업장 정보</TitleBox>
      <NoContentTxt>등록된 사업장 정보가 없어요</NoContentTxt>
      <PlusPlace>
        + 새로운 회사 <span>추가하기</span>{" "}
      </PlusPlace>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${({ modal }) => (modal ? "30%" : "0%")};
  width: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px -5px 20px -5px gray;
  z-index: 11;
  position: absolute;
  bottom: 0;
  transition: all 600ms ease-in-out;
`;

const CloseBtnBox = styled.div`
  padding: 3% 0;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  .closeBtn {
    :hover {
      cursor: pointer;
    }
  }
`;

const TitleBox = styled.div`
  padding: 2% 0;
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-thickSub);
`;

const NoContentTxt = styled.div`
  font-size: 14px;
  margin-top: 3%;
  padding: 3% 0;
  color: var(--color-main);
`;

const PlusPlace = styled.div`
  font-size: 14px;
  padding: 3% 0;
`;
