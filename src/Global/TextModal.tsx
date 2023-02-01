import React from "react";
import styled from "styled-components";
import { refundBasisList } from "../Assets/RefundBasis";

export const TextModal = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BackGroundModal active={active}>
      <Wrap active={active}>
        <CloseButton onClick={() => setActive(false)}>X</CloseButton>
        <Title>{refundBasisList.title}</Title>
        <SubTextBox>
          <div>{refundBasisList.subTitle}</div>
          <div>{refundBasisList.subDetailTitle}</div>
          <div>{refundBasisList.detail}</div>
        </SubTextBox>

        <div>
          {refundBasisList.textList.map((paragraph: string) => {
            return <ParagraphBox>{paragraph}</ParagraphBox>;
          })}
        </div>
      </Wrap>
    </BackGroundModal>
  );
};

const BackGroundModal = styled.div<{ active: Boolean }>`
  height: ${({ active }) => (active ? "100%" : " 0%")};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
`;
const Wrap = styled.div<{ active: Boolean }>`
  position: fixed;
  z-index: 10;
  bottom: -5%;
  width: 90%;
  padding: 10px 30px;
  height: ${({ active }) => (active ? "80%" : " 0%")};
  transition: all 400ms ease-in-out;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-thickSub);
  margin-bottom: 30px;
`;

const SubTextBox = styled.div`
  margin-bottom: 30px;
`;

const ParagraphBox = styled.div`
  margin-top: 20px;
`;
