import React from "react";
import styled from "styled-components";
import { boolean } from "yup";

export const SelectModal = ({ selectModal }: { selectModal: boolean }) => {
  return (
    <BackGroundModal selectModal={selectModal}>
      <Wrap selectModal={selectModal}>SelectModal</Wrap>;
    </BackGroundModal>
  );
};

const BackGroundModal = styled.div<{ selectModal: boolean }>`
  height: ${({ selectModal }) => (selectModal ? "100%" : " 0%")};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrap = styled.div<{ selectModal: boolean }>`
  position: absolute;
  z-index: 11;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: ${({ selectModal }) => (selectModal ? "30%" : "0%")};
  transition: all 600ms ease-in-out;
`;
