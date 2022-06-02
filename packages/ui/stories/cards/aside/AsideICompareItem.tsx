import React, { FC } from 'react';
import _ from 'lodash-es';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
import { Icon10 } from './IconCompare10';

const StyledContainer = styled.div`
    border-radius: 18.5px;
    background-color: rgba(254, 225, 101, 1);
    width: fit-content;
    padding: 0.505rem 1.5rem 0.599rem 0.939rem;
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

type IconProps = {};
type Props = {
    // onClickk: (params: any) => void;
    key?: string;
};
export const AsideCompareItem: FC<Props> = (props: Props) => {
    const throttledHandleClick = _.throttle((key?: string) => {
        // props.onClick(props.key);
    }, 3000);
    const handleClick = () => {
        throttledHandleClick(props.key);
    };
    return (
        <div>
            <Box as={StyledContainer} gap="0.655rem" flex justifyContent="start">
                <Icon10 />
                <StyledText>오늘의 공부</StyledText>
            </Box>
        </div>
    );
};
AsideCompareItem.defaultProps = {
    key: 'HEADER_LAYOUT_BACKWARD',
};
