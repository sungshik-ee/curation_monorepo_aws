import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Composition, Box } from "atomic-layout";
import styled, { css, createGlobalStyle } from "styled-components";
import { StyledInput as BaseStyledInput } from "./styles/input";

enum Gender {
  female = "female",
  male = "male",
  other = "other",
}

type FormInput = {
  id: string;
  password: string;
  gender: Gender;
};

type Props = {};

const StyledInput = styled;

export const LoginForm: FC<Props> = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Composition gap={12}>
        <StyledInput
          {...register("id", { required: true })}
          placeholder="WINK 통합 아이디 입력"
        />
        {errors.id?.type === "required" && "아이디는 필수입력 항목입니다."}
        <StyledInput
          {...register("password", { required: true })}
          type="password"
          placeholder="비밀번호"
        />
      </Composition>

      <label>성별</label>
      <select {...register("gender")}>
        <option value="female">여자</option>
        <option value="male">남자</option>
        <option value="other">기타</option>
      </select>
      <button type="submit">확인</button>
      <input type="submit" />
    </form>
  );
};
