import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
import { AsideItem } from './aside/AsideItem';
import { AsideCompareItem } from './aside/AsideICompareItem';

const StyledContainer = styled.aside`
    width: 13.125rem;
    min-height: 10rem;
    height: 100%;
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
    return (
        <StyledContainer>
            <Box flex flexDirection="column" alignItems="start" gap="1rem">
                <AsideCompareItem />
                <AsideItem />
            </Box>
        </StyledContainer>
    );
};
AsideLayout.defaultProps = {
    key: 'NAV_LAYOUT',
};
