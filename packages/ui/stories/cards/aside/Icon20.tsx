import React, { FC } from 'react';
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
    left: 0;
    top: 0;
`;
const StyledIconTextTop = styled.div`
    left: 9.242px;
    top: 6.153px;
    position: absolute;
    overflow: visible;
    width: 10px;
    white-space: nowrap;
    line-height: 13px;
    margin-top: -1.5px;
    text-align: left;
    font-family: SDGothicNeoRound-gBd-KSCpc-EUC-H;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: rgba(255, 255, 255, 1);
`;
const StyledIconTextBottom = styled.div`
    left: 16.758px;
    top: 12.875px;
    position: absolute;
    overflow: visible;
    width: 7px;
    white-space: nowrap;
    line-height: 11px;
    margin-top: -1px;
    text-align: left;
    font-family: SDGothicNeoRound-gBd-KSCpc-EUC-H;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    color: rgba(255, 255, 255, 1);
`;

type Props = {};
export const Icon20: FC<Props> = (props: Props) => {
    return (
        <Box as={StyledContainer} flex justifyContent="center" alignItems="center">
            <StyledIconContainer>
                <StyledImage
                    src="/cards/aside/20.png"
                    srcSet="/cards/aside/20.png 1x, /cards/aside/20@2x.png 2x"
                />
                <StyledIconTextTop>
                    <span>ㄱ</span>
                </StyledIconTextTop>
                <StyledIconTextBottom>
                    <span>A</span>
                </StyledIconTextBottom>
            </StyledIconContainer>
        </Box>
    );
};
