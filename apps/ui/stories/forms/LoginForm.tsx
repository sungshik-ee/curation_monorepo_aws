import React, { FC, useState, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Composition, Box } from 'atomic-layout';
import styled, { css, createGlobalStyle } from 'styled-components';
import { StyledInput as BaseStyledInput } from './styles/input';
import { useMutation } from 'react-query';
import { getAxios } from '@DanbiEduCorp/core/src/axios';

enum Gender {
    female = 'female',
    male = 'male',
    other = 'other',
}

type FormInput = {
    username: string;
    password: string;
    gender: Gender;
};

type Props = {};

const StyledInput = styled(BaseStyledInput)`
    //border-color: red;
`;

function useLogin() {
    return useMutation((data) =>
        getAxios()
            .post('/account/auths/authenticate/', data)
            .then((docs) => console.log(docs.data))
            .catch((err) => console.log(err))
    );
}

export const LoginForm: FC<Props> = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();

    const mutation = useLogin();

    // const mutation = useMutation((data) => getAxios().post('/account/auths/authenticate/', data), {
    //     onSuccess: (docs) => {
    //         console.log(docs.data);
    //     },
    //     onError: () => {},
    //     onSettled: () => {},
    // });

    // const mutation = useMutation((data) =>
    //     getAxios()
    //         .post('/account/auths/authenticate/', data)
    //         .then((docs) => console.log(docs.data))
    //         .catch((err) => console.log(err))
    // );

    const onSubmit: SubmitHandler<FormInput> = useCallback(
        (params) => {
            const data = mutation.mutate(params);
            console.log(data);
        },
        [mutation]
    );
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Composition gap={12}>
                <StyledInput
                    {...register('username', { required: true })}
                    placeholder="WINK 통합 아이디 입력"
                />
                {errors.username?.type === 'required' && '아이디는 필수입력 항목입니다.'}
                <StyledInput
                    {...register('password', { required: true })}
                    type="password"
                    placeholder="비밀번호"
                />
            </Composition>

            {/*<label>성별</label>*/}
            {/*<select {...register('gender')}>*/}
            {/*    <option value="female">여자</option>*/}
            {/*    <option value="male">남자</option>*/}
            {/*    <option value="other">기타</option>*/}
            {/*</select>*/}
            <button type="submit">확인</button>
            <input type="submit" />
        </form>
    );
};
