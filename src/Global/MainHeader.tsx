import React from "react";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const MainHeader = ({ title }: { title?: string }) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <HeaderTxt> {title}</HeaderTxt>

      <FlexBox>
        <ShareBox onClick={() => navigate("/certify")}>공동인증센터</ShareBox>{" "}
        <BsFillBellFill className="icon" size={30} />
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  padding-top: 10%;
`;

const HeaderTxt = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: var(--color-thickSub);
`;

const ShareBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border: 2px solid var(--color-sub);
  color: var(--color-sub);
  padding: 2% 5%;
  width: 100px;
  border-radius: 25px;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    background-color: var(--color-sub);
    color: white;
  }
`;

const FlexBox = styled.div`
  display: flex;
  .icon {
    color: var(--color-thickSub);
  }
`;
