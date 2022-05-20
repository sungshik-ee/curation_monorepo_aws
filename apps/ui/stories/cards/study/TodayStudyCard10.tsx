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
} from './styles/todayStudy';

const StyledRect1 = styled.rect`
    fill: rgba(214, 118, 178, 1);
`;
const StyledRect2 = styled.rect`
    opacity: 0.102;
    fill: rgba(0, 0, 0, 1);
`;
const StyleRect3 = styled.rect`
    fill: rgba(255, 255, 255, 1);
`;
const StyledRect4 = styled.rect`
    opacity: 0.102;
    fill: rgba(0, 0, 0, 1);
`;
const StyledRect5 = styled.rect`
    fill: rgba(255, 255, 255, 1);
`;
const StyledRect6 = styled.rect`
    opacity: 0.149;
    fill: rgba(0, 0, 0, 1);
`;
const StyledPath7 = styled.path`
    fill: rgba(239, 136, 191, 1);
`;
const StyledPath8 = styled.path`
    fill: rgba(255, 255, 255, 1);
`;

const StyledTitle = styled.div`
    left: 43.661px;
    top: 28.552px;
    position: absolute;
    overflow: visible;
    width: 35px;
    white-space: nowrap;
    line-height: 24px;
    margin-top: -2px;
    text-align: center;
    font-family: Sandoll GothicNeoRound;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
`;

type Props = {
    onClick: (params: any) => void;
};

export const TodayStudyCard10: FC<Props> = (props: Props) => {
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
                <StyleRect3 rx="10" ry="10" x="0" y="0" width="25" height="150"></StyleRect3>
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
            <StyledBackgroundImage
                src="/cards/todayStudyBackground01.png"
                srcSet="cards/todayStudyBackground01.png 1x, cards/todayStudyBackground01@2x.png 2x"
            />
            <StyledSvg8 viewBox="231.007 188.989 89.678 73.897">
                <StyledPath8 d="M 276.9049377441406 188.9961853027344 C 276.9049377441406 188.9961853027344 259.0520935058594 188.4453125 245.8781585693359 196.8582763671875 C 232.7040100097656 205.2710876464844 230.91064453125 224.592041015625 231.0110778808594 226.3407440185547 C 231.111328125 228.0892639160156 231.5381317138672 256.7638549804688 262.037841796875 261.7198181152344 C 292.5377197265625 266.6757507324219 314.4412841796875 255.0574645996094 318.2742614746094 241.4095611572266 C 322.1071472167969 227.7617492675781 321.7560729980469 212.9118194580078 314.3957824707031 204.7201995849609 C 307.0356140136719 196.5286560058594 298.7050476074219 188.7958526611328 276.9049377441406 188.9961853027344 Z"></StyledPath8>
            </StyledSvg8>
            <StyledTitle>
                <span>
                    한글
                    <br />
                    국어
                </span>
            </StyledTitle>
            <StyledImage
                src="/cards/todayStudyBody01.png"
                srcSet="cards/todayStudyBody01.png 1x, cards/todayStudyBody01@2x.png 2x"
            />
        </StyledContainer>
    );
};
