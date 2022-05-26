import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';

const StyledContainer = styled.aside`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 13.125rem;
    //height: 221.85rem;
    margin-top: 4.688rem;
    //padding: 3.625rem 1.813rem 181.725rem 1.125rem;
    background-color: #fffdf4;
`;

type Props = {
    onClick: (params: any) => void;
    key?: string;
};
export const AsideLayout: FC<Props> = (props: Props) => {
    const throttledHandleClick = _.throttle((key?: string) => {
        props.onClick(props.key);
    }, 3000);
    const handleClick = () => {
        throttledHandleClick(props.key);
    };
    return <StyledContainer>NAV</StyledContainer>;
};
AsideLayout.defaultProps = {
    key: 'NAV_LAYOUT',
};
