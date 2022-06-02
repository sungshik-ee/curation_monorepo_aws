import React, { FC } from 'react';
import _ from 'lodash-es';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';

const StyledContainer = styled.div`
    width: 80rem;
    height: 4.688rem;

    background-color: #fddb5a;
`;
const StyledPaddingContainer = styled.div`
    padding: 1.063rem 1.75rem 0.688rem 2.027rem;
`;
const StyledTitle = styled.span`
    width: 6.3rem;
    height: 2.188rem;
    //margin: 0.125rem 33.875rem 0.625rem 31.912rem;
    font-family: SDGothicNeoRound-hEb;
    font-size: 1.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: center;
    color: #3d3d3d;
`;
const StyledButtonContainer = styled.div`
    position: relative;
    width: 46.962px;
    height: 41.39px;
    //left: 32.438px;
    //top: 17px;
`;

const StyledRect1 = styled.rect`
    fill: rgba(255, 255, 255, 1);
`;
const StyledSvg1 = styled.svg`
    filter: drop-shadow(0px 3px 0px rgba(229, 180, 17, 1));
    position: absolute;
    overflow: visible;
    width: 46.962px;
    height: 44.39px;
    left: 0;
    top: 0;
`;
const StyledPath2 = styled.path`
    fill: rgba(254, 210, 43, 1);
`;
const StyledSvg2 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 15.1px;
    height: 20.703px;
    left: 11.164px;
    top: 10.343px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledRect3 = styled.rect`
    fill: rgba(254, 210, 43, 1);
`;
const StyledSvg3 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 17.512px;
    height: 7.957px;
    left: 19.101px;
    top: 16.717px;
`;

type Props = {
    onClick: (params: any) => void;
    key?: string;
};
export const HeaderLayout: FC<Props> = (props: Props) => {
    const throttledHandleClick = _.throttle((key?: string) => {
        props.onClick(props.key);
    }, 3000);
    const handleClick = () => {
        throttledHandleClick(props.key);
    };
    return (
        <StyledContainer>
            <Box as={StyledPaddingContainer} flex justifyContent="space-between">
                <StyledButtonContainer onClick={handleClick} onTouchStart={handleClick}>
                    <StyledSvg1>
                        <StyledRect1
                            rx="20.69500732421875"
                            ry="20.69500732421875"
                            x="0"
                            y="0"
                            width="46.962"
                            height="41.39"
                        ></StyledRect1>
                    </StyledSvg1>
                    <StyledSvg2 viewBox="51.782 29.843 15.1 20.703">
                        <StyledPath2 d="M 57.58552169799805 47.95769119262695 C 65.7149658203125 53.13332366943359 66.88181304931641 50.54555130004883 66.88181304931641 40.19403076171875 C 66.88181304931641 29.84259605407715 65.7149658203125 27.25473785400391 57.58552169799805 32.43036651611328 C 49.68683242797852 38.30899047851562 50.01007461547852 42.32554244995117 57.58552169799805 47.95769119262695 Z"></StyledPath2>
                    </StyledSvg2>
                    <StyledSvg3>
                        <StyledRect3
                            rx="3.978297472000122"
                            ry="3.978297472000122"
                            x="0"
                            y="0"
                            width="17.511"
                            height="7.957"
                        ></StyledRect3>
                    </StyledSvg3>
                </StyledButtonContainer>
                <StyledTitle>전체보기</StyledTitle>
                <div></div>
            </Box>
        </StyledContainer>
    );
};
HeaderLayout.defaultProps = {
    key: 'HEADER_LAYOUT_BACKWARD',
};
