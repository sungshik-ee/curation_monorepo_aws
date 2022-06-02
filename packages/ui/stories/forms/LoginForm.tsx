import React, { FC, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Composition } from 'atomic-layout';
import styled from 'styled-components';
import _ from 'lodash-es';
import { StyledInput as BaseStyledInput } from './styles/input';

enum Gender {
    female = 'female',
    male = 'male',
    other = 'other',
}

export type FormInput = {
    username: string;
    password: string;
    gender: Gender;
};

type Props = {
    onSubmit: (params: any) => void;
};

type Auth = {
    id: number;
};

const StyledInput = styled(BaseStyledInput)`
    //border-color: red;
`;

export const LoginForm: FC<Props> = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();

    const debounceSubmit = useCallback(
        _.debounce((params) => props.onSubmit(params), 500),
        []
    );

    const onSubmit: SubmitHandler<FormInput> = useCallback(
        async (params) => debounceSubmit(params),
        []
    );
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Composition gap={12}>
                <StyledInput
                    data-testid="username"
                    {...register('username', { required: true })}
                    placeholder="WINK 통합 아이디 입력"
                />
                {errors.username?.type === 'required' && '아이디는 필수입력 항목입니다.'}
                <StyledInput
                    data-testid="password"
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
            <button data-testid="submit" type="submit">
                확인
            </button>
        </form>
    );
};

LoginForm.defaultProps = {
    onSubmit: (params) => console.warn('LoginForm onSubmit not implemented'),
};
