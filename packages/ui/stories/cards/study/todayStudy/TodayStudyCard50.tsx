import React, { FC } from 'react';
import styled from 'styled-components';
import {
    StyledContainer,
    StyledBackgroundImage,
    StyledImage,
    StyledSvg1,
    StyledSvg2,
    StyledSvg3,
    StyledSvg4,
    StyledSvg5,
    StyledSvg6,
    StyledSvg8,
    StyledRect2,
    StyledRect3,
    StyledRect4,
    StyledRect5,
    StyledRect6,
    StyledPath8,
} from './styles/todayStudy';
import { Props } from './types/todayStudyCard';
const StyledRect1 = styled.rect`
    fill: rgba(106, 144, 195, 1);
`;
const StyledSvg7 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 114px;
    height: 150px;
    left: 1px;
    top: 0;
`;
const StyledRect7 = styled.rect`
    fill: rgba(113, 156, 214, 1);
`;
const StyledTitleContainer = styled.div`
    position: absolute;
    width: 58px;
    height: 42px;
    left: 35px;
    top: 32.253px;
    overflow: visible;
`;
const StyledTitle = styled.div`
    left: 0;
    top: 0;
    position: absolute;
    overflow: visible;
    width: 59px;
    white-space: nowrap;
    line-height: 22px;
    margin-top: -2.5px;
    text-align: center;
    font-family: Sandoll GothicNeoRound;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    color: rgba(51, 51, 51, 1);
`;

export const TodayStudyCard50: FC<Props> = (props: Props) => {
    const handleClick = () => {
        props.onClick(props.key);
    };
    return (
        <StyledContainer onClick={handleClick}>
            <StyledSvg1>
                <StyledRect1 rx="11" ry="11" x="0" y="0" width="122" height="150"></StyledRect1>
            </StyledSvg1>
            <StyledSvg2>
                <StyledRect2 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyledRect2>
            </StyledSvg2>
            <StyledSvg3>
                <StyledRect3 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyledRect3>
            </StyledSvg3>
            <StyledSvg4>
                <StyledRect4 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyledRect4>
            </StyledSvg4>
            <StyledSvg5>
                <StyledRect5 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyledRect5>
            </StyledSvg5>
            <StyledSvg6>
                <StyledRect6 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyledRect6>
            </StyledSvg6>
            <StyledSvg7>
                <StyledRect7 rx="8" ry="8" x="0" y="0" width="114" height="150"></StyledRect7>
            </StyledSvg7>
            <StyledSvg8 viewBox="231.007 188.989 89.678 73.897">
                <StyledPath8 d="M 276.9049377441406 188.9961853027344 C 276.9049377441406 188.9961853027344 259.0520935058594 188.4453125 245.8781585693359 196.8582763671875 C 232.7040100097656 205.2710876464844 230.91064453125 224.592041015625 231.0110778808594 226.3407440185547 C 231.111328125 228.0892639160156 231.5381317138672 256.7638549804688 262.037841796875 261.7198181152344 C 292.5377197265625 266.6757507324219 314.4412841796875 255.0574645996094 318.2742614746094 241.4095611572266 C 322.1071472167969 227.7617492675781 321.7560729980469 212.9118194580078 314.3957824707031 204.7201995849609 C 307.0356140136719 196.5286560058594 298.7050476074219 188.7958526611328 276.9049377441406 188.9961853027344 Z"></StyledPath8>
            </StyledSvg8>
            <StyledBackgroundImage
                src="/cards/todayStudy/background.png"
                srcSet="/cards/todayStudy/background.png 1x, /cards/todayStudy/background@2x.png 2x"
            />
            <StyledImage
                src="/cards/todayStudy/50.png"
                srcSet="/cards/todayStudy/50.png 1x, /cards/todayStudy/50@2x.png 2x"
            />

            <StyledTitleContainer>
                <StyledTitle>
                    <span>
                        학교공부
                        <br />
                        따라잡기
                    </span>
                </StyledTitle>
            </StyledTitleContainer>
        </StyledContainer>
    );
};

TodayStudyCard50.defaultProps = {
    key: 'TODAY_STUDY_7_AGE',
};
