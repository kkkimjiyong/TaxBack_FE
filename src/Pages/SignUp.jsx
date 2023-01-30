import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../GlobalStyle/Layout";
import { SurveyHeader } from "../GlobalStyle/SurveyHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SignUp = () => {
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

  //useForm 설정
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });
  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={"이메일 회원가입"} undoPage={"/"} />
        <InputBox>
          {" "}
          <Label for="name">이름</Label>
          <Input type={"text"} placeholder="예) 홍길동" {...register("name")} />
          {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        </InputBox>
        <InputBox>
          <Label for="phoneNumber">휴대 전화번호</Label>
          <Input
            type={"number"}
            placeholder="휴대 전화번호를 입력해주세요"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>
          )}
        </InputBox>
        <InputBox>
          <Label for="email">이메일</Label>
          <Input
            type={"text"}
            placeholder="예) abc@gmail.com"
            {...register("email")}
          />{" "}
          {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}
        </InputBox>
        <InputBox>
          {" "}
          <Label for="password">비밀번호</Label>
          <Input
            type={"password"}
            placeholder="영문, 숫자, 특수문자 조합 8~16자"
            {...register("password")}
          />
          {errors.password && <ErrorTxt>{errors.password.message}</ErrorTxt>}
        </InputBox>
        <InputBox>
          <Label for="passwordConfirm">비밀번호 확인</Label>
          <Input
            type={"password"}
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("passwordConfirm")}
          />{" "}
          {errors.passwordConfirm && (
            <ErrorTxt>{errors.passwordConfirm.message}</ErrorTxt>
          )}
        </InputBox>
        <InputBox>
          <InputTitleBox>
            <Label for="recommend">추천인 아이디</Label>
          </InputTitleBox>
          <Input
            type={"password"}
            placeholder="추천인 아이디를 입력해주세요. (선택)"
            {...register("recommend")}
          />
        </InputBox>
        <div>
          <input
            id="allCheck"
            type={"checkbox"}
            checked={allCheck}
            onChange={() => {
              setAllCheck(!allCheck);
              setEssential(!essential);
            }}
          />{" "}
          <label for="allCheck">아래 약관에 모두 동의합니다</label>
        </div>
        <div>
          <input id="essential" type={"checkbox"} checked={essential} />{" "}
          <label for="essential">[필수] 이용약관 동의</label>
        </div>
      </Wrap>
    </Layout>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 33%;
  width: 90%;
  height: 80%;
  overflow-y: auto;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px 0;
  width: 90%;
  height: 8%;
  padding: 5%;
  background-color: var(--color-inputBox);
`;

const InputTitleBox = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const ErrorTxt = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-main);
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 4% 1%;
`;