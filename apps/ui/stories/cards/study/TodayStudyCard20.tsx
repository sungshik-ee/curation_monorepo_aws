import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
`;
const StyledRect1 = styled.rect`
    fill: rgba(190, 104, 72, 1);
`;

const StyledSvg1 = styled.svg`
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.2));
    position: absolute;
    overflow: visible;
    width: 140px;
    height: 168px;
    left: 2px;
    top: 0px;
`;

const StyledRect2 = styled.rect`
    opacity: 0.102;
    fill: rgba(0, 0, 0, 1);
`;
const StyledSvg2 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 25px;
    height: 150px;
    left: 96px;
    top: 0px;
`;
const StyledRect3 = styled.rect`
    fill: rgba(255, 255, 255, 1);
`;
const StyledSvg3 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 25px;
    height: 150px;
    left: 95px;
    top: 0px;
`;
const StyledRect4 = styled.rect`
    opacity: 0.102;
    fill: rgba(0, 0, 0, 1);
`;
const StyledSvg4 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 25px;
    height: 150px;
    left: 93px;
    top: 0px;
`;
const StyledRect5 = styled.rect`
    fill: rgba(255, 255, 255, 1);
`;
const StyledSvg5 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 25px;
    height: 150px;
    left: 92px;
    top: 0px;
`;
const StyledRect6 = styled.rect`
    opacity: 0.149;
    fill: rgba(0, 0, 0, 1);
`;
const StyledSvg6 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 25px;
    height: 150px;
    left: 90px;
    top: 0px;
`;
const StyledPath7 = styled.path`
    fill: rgba(242, 127, 91, 1);
`;
const StyledSvg7 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 114px;
    height: 150px;
    left: 0px;
    top: 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath8 = styled.path`
    fill: rgba(255, 255, 255, 1);
`;
const StyledSvg8 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 89.678px;
    height: 73.897px;
    left: 15.822px;
    top: 15.603px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledTitleContainer = styled.div`
    position: absolute;
    width: 44px;
    height: 46.448px;
    left: 38.662px;
    top: 29.552px;
    overflow: visible;
`;
const StyledTitleTop = styled.div`
    left: 2px;
    top: 19.448px;
    position: absolute;
    overflow: visible;
    width: 39px;
    white-space: nowrap;
    text-align: center;
    font-family: Sandoll GothicNeoRound;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: rgba(51, 51, 51, 1);
`;
const StyledTitleBottom = styled.div`
    left: 0px;
    top: 0px;
    position: absolute;
    overflow: visible;
    width: 45px;
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
const StyledBackgroundImage = styled.img`
    position: absolute;
    width: 114px;
    height: 150px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledImage = styled.img`
    position: absolute;
    width: 114px;
    height: 150px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;

type Props = {
    onClick: (params: any) => void;
};

export const TodayStudyCard20: FC<Props> = (props: Props) => {
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
            <StyledBackgroundImage
                src="/cards/todayStudyBackground02.png"
                srcSet="/cards/todayStudyBackground02.png 1x, /cards/todayStudyBackground02@2x.png 2x"
            />

            <StyledSvg8 viewBox="231.007 188.989 89.678 73.897">
                <StyledPath8 d="M 276.9049377441406 188.9961853027344 C 276.9049377441406 188.9961853027344 259.0520935058594 188.4453125 245.8781585693359 196.8582763671875 C 232.7040100097656 205.2710876464844 230.91064453125 224.592041015625 231.0110778808594 226.3407440185547 C 231.111328125 228.0892639160156 231.5381317138672 256.7638549804688 262.037841796875 261.7198181152344 C 292.5377197265625 266.6757507324219 314.4412841796875 255.0574645996094 318.2742614746094 241.4095611572266 C 322.1071472167969 227.7617492675781 321.7560729980469 212.9118194580078 314.3957824707031 204.7201995849609 C 307.0356140136719 196.5286560058594 298.7050476074219 188.7958526611328 276.9049377441406 188.9961853027344 Z"></StyledPath8>
            </StyledSvg8>
            <StyledTitleContainer>
                <StyledTitleTop>
                    <span>수학</span>
                </StyledTitleTop>
                <StyledTitleBottom>
                    <span>영역별</span>
                </StyledTitleBottom>
            </StyledTitleContainer>
            <StyledImage
                src="/cards/todayStudyBody02.png"
                srcSet="/cards/todayStudyBody02.png 1x, /cards/todayStudyBody02@2x.png 2x"
            />
        </StyledContainer>
    );
};
