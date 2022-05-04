import React, { FC, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Composition } from 'atomic-layout';
import styled from 'styled-components';
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

    const onSubmit: SubmitHandler<FormInput> = useCallback(async (params) => {
        props.onSubmit(params);
    }, []);
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

LoginForm.defaultProps = {
    onSubmit: (params) => console.warn('LoginForm onSubmit not implemented'),
};
