import React, { FC, useState, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Composition, Box } from 'atomic-layout';
import styled, { css, createGlobalStyle } from 'styled-components';
import { StyledInput as BaseStyledInput } from './styles/input';
import { useMutation, useQueryClient } from 'react-query';
import { useAxios } from '@DanbiEduCorp/core/src/axios';

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

type Auth = {
    id: number;
};

const StyledInput = styled(BaseStyledInput)`
    //border-color: red;
`;

function useAuthenticate() {
    return useMutation(
        (data) =>
            useAxios()
                .post('/account/auths/authenticate/', data)
                .then((docs) => docs.data)
        // 여기에 catch를 호출하면 mutation에서 onSuccess를 호출함
        // .catch((err) => console.log(err))
    );
}
function useLogin() {
    return useMutation((params: Auth) =>
        useAxios()
            .post(`/account/auths/${params.id}/login_actor/`, { actor_type: 4 })
            .then((docs) => docs.data)
    );
}
export const LoginForm: FC<Props> = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();
    const [auth, setAuth] = useState();

    const authMutation = useAuthenticate();
    const loginMutation = useLogin();
    const queryClient = useQueryClient();

    const onSubmit: SubmitHandler<FormInput> = useCallback(async (params) => {
        await authMutation
            .mutateAsync(params)
            .then(async (data) => {
                await queryClient.setQueryData(['profileAuth'], data);
                return loginMutation.mutateAsync(data);
            })
            .then(async (data) => {
                console.log(data);
                await queryClient.setQueryData(['profileActor'], data);
            });
        // authMutation.mutate(params, {
        //     onSuccess: (data) => {
        //         console.log('정상!', data);
        //         setAuth(data);
        //     },
        //     onError: (err) => {
        //         console.log('오류!', err);
        //         setAuth();
        //     },
        // });
    }, []);

    useEffect(() => {
        if (!auth) {
            return;
        }
        console.log(auth);
    }, [auth]);
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
