import React from "react";
import styled from "styled-components";

export const AssignButton = ({ type, setModal }) => {
  const CheckBusinessPlace = () => {
    setModal(true);
  };

  return (
    <Wrap onClick={CheckBusinessPlace}>
      {type === "corporation" ? "법인사업자" : "개인사업자"}로 환급받기
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-main);
  width: 90%;
  border: 1px solid var(--color-main);
  height: 60px;
  border-radius: 40px;
  :hover {
    background-color: var(--color-main);
    color: white;
    opacity: 1;
    cursor: pointer;
  }
`;
