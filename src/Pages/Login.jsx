import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { IoIosArrowBack } from "react-icons/io";
import LoginImage from "../Assets/Image/Login.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <IconBox>
        <IoIosArrowBack onClick={() => navigate("/")} size={30} />
      </IconBox>
      <HeadTxt>로그인</HeadTxt>
      <Img src={LoginImage} alt="로그인" />
      <InputBox>
        <Label for="passwordConfirm">이메일</Label>
        <Input type={"password"} placeholder="예) abc@gmail.com" />{" "}
      </InputBox>
      <InputBox>
        <Label for="password">비밀번호</Label>
        <Input type={"password"} placeholder="영문, 숫자 조합 8~16자" />{" "}
      </InputBox>
      <FlexBox>
        <div className="inner">
          <input type={"checkbox"} />
          <div>로그인 상태 유지</div>
        </div>
        <div className="smallTxt">아이디 | 비밀번호 찾기</div>
      </FlexBox>
      <LoginBtn>로그인 하기</LoginBtn>
      <SignUpTxt>
        아직 회원이 아니신가요?&nbsp;<span> 가입하기</span>
      </SignUpTxt>
    </Layout>
  );
};

const IconBox = styled.div`
  margin-top: 10%;
  width: 92%;
  display: flex;
  color: var(--color-thickSub);
`;

const HeadTxt = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 90%;
  color: var(--color-thickSub);
`;

const Img = styled.img`
  margin-top: 10%;
  width: 40%;
  @media screen and (max-height: 795px) {
    margin-top: 5%;
    width: 30%;
  }
  @media screen and (max-height: 670px) {
    display: none;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px 0;
  width: 80%;
  height: 5%;
  padding: 5%;
  background-color: var(--color-inputBox);
`;
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  margin-right: 10px;
`;
const Input = styled.input`
  font-size: 14px;
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 2% 0%;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  .inner {
    display: flex;
    color: var(--color-thickSub);
    font-weight: 600;
    :hover {
      cursor: pointer;
    }
  }
  .smallTxt {
    font-weight: 400;
    :hover {
      cursor: pointer;
    }
  }
`;

const LoginBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82%;
  padding: 4%;
  margin-top: 25%;
  @media screen and (max-height: 730px) {
    margin-top: 15%;
  }
  background-color: var(--color-gray);
  color: white;
  border-radius: 40px;
`;

const SignUpTxt = styled.div`
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  text-align: center;
`;
