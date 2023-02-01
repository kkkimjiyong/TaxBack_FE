import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
  recommend?: string;
};

export const SignUp = () => {
  const navigate = useNavigate();

  const [allCheck, setAllCheck] = useState(false);
  const [essential, setEssential] = useState(false);

  //yup을 이용한 유효섬겅증방식
  const formSchema = yup.object({
    name: yup
      .string()
      .required("이름을 입력해주세요")
      .min(2, "최소 2자 이상 가능합니다")
      .max(6, "최대 6자 까지만 가능합니다"),
    phoneNumber: yup
      .string()
      .required("전화번호를 입력해주세요")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "전화번호 양식에 맞게 입력해주세요"
      ),
    email: yup
      .string()
      .email("유효하지 않은 이메일입니다.")
      .required("이메일을 입력해주세요."),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
        "8~16자, 영문, 숫자, 특수문자 포함"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다.")
      .required("비밀번호를 확인해주세요."),
  });

  // 서버 API 데이터 전송
  const PostUser = async (userInfo: TuserInfo) => {
    try {
      const response = axios.post("http://localhost:3001/signup", {
        userInfo: userInfo,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // get요청 연습
  const GetUsers = async () => {
    try {
      const response = axios.get("http://localhost:3001/signup/users");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입 submit 핸들러
  const SubmitHandler = (): void => {
    navigate("/signup/done");
    console.log(getValues());
    PostUser(getValues());
    GetUsers();
  };

  //useForm 설정
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserInfo>({
    mode: "onChange",
    // resolver: yupResolver(formSchema),
  });
  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={"이메일 회원가입"} undoPage={"/"} />
        <InputBox>
          {" "}
          <Label htmlFor="name">이름</Label>
          <Input type={"text"} placeholder="예) 홍길동" {...register("name")} />
        </InputBox>{" "}
        {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        <InputBox>
          <Label htmlFor="phoneNumber">휴대 전화번호</Label>
          <Input
            type={"number"}
            placeholder="휴대 전화번호를 입력해주세요"
            {...register("phoneNumber")}
          />
        </InputBox>{" "}
        {errors.phoneNumber && (
          <ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>
        )}
        <InputBox>
          <Label htmlFor="email">이메일</Label>
          <Input
            type={"text"}
            placeholder="예) abc@gmail.com"
            {...register("email")}
          />{" "}
        </InputBox>{" "}
        {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}
        <InputBox>
          {" "}
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type={"password"}
            placeholder="영문, 숫자, 특수문자 조합 8~16자"
            {...register("password")}
          />
        </InputBox>{" "}
        {errors.password && <ErrorTxt>{errors.password.message}</ErrorTxt>}
        <InputBox>
          <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
          <Input
            type={"password"}
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("passwordConfirm")}
          />{" "}
        </InputBox>{" "}
        {errors.passwordConfirm && (
          <ErrorTxt>{errors.passwordConfirm.message}</ErrorTxt>
        )}
        <InputBox>
          <InputTitleBox>
            <Label htmlFor="recommend">추천인 아이디</Label>
          </InputTitleBox>
          <Input
            type={"text"}
            placeholder="추천인 아이디를 입력해주세요. (선택)"
            {...register("recommend")}
          />
        </InputBox>
        <CheckCtn className="allCheck">
          <input
            id="allCheck"
            type={"checkbox"}
            checked={allCheck}
            onChange={() => {
              setAllCheck(!allCheck);
              setEssential(!essential);
            }}
          />{" "}
          <label htmlFor="allCheck">아래 약관에 모두 동의합니다</label>
        </CheckCtn>
        <CheckCtn>
          <input id="essential" type={"checkbox"} checked={essential} />{" "}
          <label htmlFor="essential">[필수] 이용약관 동의</label>
        </CheckCtn>
      </Wrap>
      <DoneBtn onClick={handleSubmit(SubmitHandler)}>회원가입 완료</DoneBtn>
    </Layout>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35%;
  width: 90%;
  height: 65%;
  padding-bottom: 5%;
  overflow-y: auto;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px 0;
  width: 90%;
  height: 8%;
  padding: 5%;
  background-color: var(--color-inputBox);
`;

const InputTitleBox = styled.div`
  display: flex;
`;
const Input = styled.input`
  font-size: 16px;
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 2% 1%;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const ErrorTxt = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 14px;
  color: var(--color-main);
`;

const CheckCtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &.allCheck {
    font-size: 20px;
    color: var(--color-main);
    margin-bottom: 2%;
  }
`;

const DoneBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 3% 0;
  padding: 3%;
  border: none;
  border-radius: 25px;
  background-color: var(--color-gray);
  color: white;
  :hover {
    background-color: var(--color-main);
  }
`;
