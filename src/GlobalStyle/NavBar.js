import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <FlexBox>
        <div>
          <HiHome
            className="icon"
            onClick={() => navigate("/survey")}
            size={26}
          />
        </div>
        홈
      </FlexBox>
      <FlexBox>
        <div>
          <RiMoneyDollarCircleFill className="icon" size={26} />
        </div>
        환급하기
      </FlexBox>
      <FlexBox onClick={() => navigate("/about")}>
        <div>
          <BsThreeDots className="icon" />
        </div>
        더보기
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  font-weight: 600;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px -5px 20px 0px gray;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

const FlexBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    color: var(--color-thickSub);
  }
  :hover {
    cursor: pointer;
  }
`;
