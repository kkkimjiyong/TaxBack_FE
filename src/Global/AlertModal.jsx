import React from "react";
import styled from "styled-components";

// 함수 prop을 전달되기전까지 타입스크립트 보류
export const AlertModal = ({
  rightButtonTxt,
  leftButtonTxt,
  rightButtonEvent,
  leftButtonEvent,
  closeButtonEvent,
  contentTxt,
  alert,
  setAlert,
}) => {
  console.log(alert);
  return (
    <Wrap alert={alert}>
      <CloseBtn onClick={() => setAlert(false)}>X</CloseBtn>
      <div>알림</div>
      <TextBox>{contentTxt}</TextBox>
      <ButtonBox>
        <Button onClick={leftButtonEvent}>{leftButtonTxt}</Button>
        <Button onClick={rightButtonEvent} className="next">
          {rightButtonTxt}
        </Button>
      </ButtonBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  z-index: 200;
  bottom: ${({ alert }) => (alert ? "0%" : "-40%")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 25%;
  transition: all 400ms ease-in-out;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5% 0%;
  font-weight: 700;
  color: var(--color-thickSub);
  box-shadow: 2px -5px 20px -5px gray;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
`;

const TextBox = styled.div`
  height: 40%;
  width: 70%;
  background-color: firebrick;
  font-size: var(--font-small);
  text-align: center;
  font-weight: 600;
  color: var(--color-thickSub);
  margin: 5% 0%;
`;

const Button = styled.div`
  font-size: var(--font-small);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--color-gray);
  width: 23%;
  padding: 3% 2%;
  border-radius: 30px;
  &.next {
    margin-left: 5%;
    padding: 3% 7%;
    background-color: var(--color-main);
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;
