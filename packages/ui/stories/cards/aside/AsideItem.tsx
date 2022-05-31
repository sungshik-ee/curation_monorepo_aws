import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
import { Icon10 } from './Icon10';

type Props = {
    // onClickk: (params: any) => void;
    key?: string;
    // icon: React.ComponentClass;
    icon?: FC;
    color?: string;
    label?: string;
    active?: boolean;
};

const StyledContainer = styled.div`
    border-radius: 18.5px;
    width: fit-content;
    padding: 0.15rem 1.5rem 0.15rem 0.439rem;
    background-color: ${(props: Props) =>
        props.active ? props.color || 'rgba(254, 225, 101, 1)' : 'transparent'};
`;
const StyledText = styled.div`
    white-space: nowrap;
    text-align: left;
    font-family: SDGothicNeoRound-gBd;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    //flex-basis: fit-content;
`;

export const AsideItem: FC<Props> = (props: Props) => {
    // const throttledHandleClick = _.throttle((key?: string) => {
    //     // props.onClick(props.key);
    // }, 3000);
    // const handleClick = () => {
    //     throttledHandleClick(props.key);
    // };
    return (
        <>
            <Box
                as={StyledContainer}
                color={props.color}
                active={props.active}
                flex
                justifyContent="start"
                alignItems="center"
            >
                {props.icon && <props.icon />}
                <StyledText>{props.label}</StyledText>
            </Box>
        </>
    );
};
AsideItem.defaultProps = {
    key: 'HEADER_LAYOUT_BACKWARD',
    icon: Icon10,
    color: 'rgba(254, 225, 101, 1)',
    label: '오늘의 공부',
    active: false,
};
