import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
const StyledContainer = styled.div`
    width: 37px;
    height: 37px;
`;
const StyledIconContainer = styled.div`
    position: relative;
    width: 33.339px;
    height: 33.339px;
`;
const StyledImage = styled.img`
    position: absolute;
    width: 33.339px;
    height: 33.339px;
    left: 0px;
    top: 0px;
`;
const StyledTitle = styled.div`
    left: 13.984px;
    top: 13.075px;
    position: absolute;
    overflow: visible;
    width: 8px;
    white-space: nowrap;
    line-height: 13px;
    margin-top: -1px;
    text-align: left;
    font-family: SDGothicNeoRound-gBd-KSCpc-EUC-H;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: rgba(188, 145, 180, 1);
`;

type Props = {};
export const Icon40: FC<Props> = (props: Props) => {
    return (
        <Box as={StyledContainer} flex justifyContent="center" alignItems="center">
            <StyledIconContainer>
                <StyledImage
                    src="/cards/aside/40.png"
                    srcSet="/cards/aside/40.png 1x, /cards/aside/40@2x.png 2x"
                />
                <StyledTitle>
                    <span>A</span>
                </StyledTitle>
            </StyledIconContainer>
        </Box>
    );
};
