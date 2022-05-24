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
    StyledSvg7,
    StyledSvg8,
    StyledRect2,
    StyledRect3,
    StyledRect4,
    StyledRect5,
    StyledRect6,
    StyledPath8,
    StyledTitleContainer,
    StyledTitleTop,
    StyledTitleBottom,
} from './styles/todayStudy';
const StyledRect1 = styled.rect`
    fill: rgba(110, 185, 104, 1);
`;
const StyledPath7 = styled.path`
    fill: rgba(131, 219, 124, 1);
`;
type Props = {
    onClick: (params: any) => void;
};

export const TodayStudyCard40: (props: Props) => JSX.Element = (props: Props) => {
    const handleClick = () => {
        props.onClick({});
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
            <StyledSvg7 viewBox="0 0 114 150">
                <StyledPath7 d="M 8 0 L 106 0 C 110.4182815551758 0 114 3.581721782684326 114 8 L 114 142 C 114 146.4182739257812 110.4182815551758 150 106 150 L 8 150 C 3.581721782684326 150 0 146.4182739257812 0 142 L 0 8 C 0 3.581721782684326 3.581721782684326 0 8 0 Z"></StyledPath7>
            </StyledSvg7>
            <StyledSvg8 viewBox="231.007 188.989 89.678 73.897">
                <StyledPath8 d="M 276.9049377441406 188.9961853027344 C 276.9049377441406 188.9961853027344 259.0520935058594 188.4453125 245.8781585693359 196.8582763671875 C 232.7040100097656 205.2710876464844 230.91064453125 224.592041015625 231.0110778808594 226.3407440185547 C 231.111328125 228.0892639160156 231.5381317138672 256.7638549804688 262.037841796875 261.7198181152344 C 292.5377197265625 266.6757507324219 314.4412841796875 255.0574645996094 318.2742614746094 241.4095611572266 C 322.1071472167969 227.7617492675781 321.7560729980469 212.9118194580078 314.3957824707031 204.7201995849609 C 307.0356140136719 196.5286560058594 298.7050476074219 188.7958526611328 276.9049377441406 188.9961853027344 Z"></StyledPath8>
            </StyledSvg8>
            <StyledBackgroundImage
                src="/cards/todayStudy/background.png"
                srcSet="/cards/todayStudy/background.png 1x, /cards/todayStudy/background@2x.png 2x"
            />
            <StyledImage
                src="/cards/todayStudy/40.png"
                srcSet="/cards/todayStudy/40.png 1x, /cards/todayStudy/40@2x.png 2x"
            />
            <StyledTitleContainer>
                <StyledTitleTop>
                    <span>영어</span>
                </StyledTitleTop>
                <StyledTitleBottom>
                    <span>파닉스</span>
                </StyledTitleBottom>
            </StyledTitleContainer>
        </StyledContainer>
    );
};
