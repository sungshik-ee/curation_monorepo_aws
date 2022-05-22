import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    width: 241px;
    height: 57px;    
    overflow: visible;
`
const StyledDiv1 = styled.div`
    position: absolute;
    width: 241px;
    height: 57px;
    left: 0px;
    top: 0px;
    overflow: visible;
`
const StyledRect2 = styled.rect`
    fill: rgba(237,191,88,1);
`
const StyledSvg2 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 241px;
    height: 54px;
    left: 0px;
    top: 3px;
`
const StyledRect3 = styled.rect`
    fill: rgba(254,225,101,1);
`
const StyledSvg3 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 241px;
    height: 54px;
    left: 0px;
    top: 0px;
`
const StyledDiv4 = styled.div`
    position: absolute;
    width: 147.631px;
    height: 31.57px;
    left: 46.685px;
    top: 12px;
    overflow: visible;
`
const StyledDiv5 = styled.div`
    position: absolute;
    width: 25.676px;
    height: 31.57px;
    left: 0px;
    top: 0px;
    overflow: visible;
`
const StyledDiv6 = styled.div`
    position: absolute;
    width: 25.676px;
    height: 31.57px;
    left: 0px;
    top: 0px;
    overflow: visible;
`
const StyledPath7 = styled.path`
    fill: rgba(188,116,68,1);
`
const StyledSvg7 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 25.244px;
    height: 27.803px;
    left: 0.001px;
    top: 2.935px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`
const StyledPath8 = styled.path`
    fill: rgba(244,242,228,1);
`
const StyledSvg8 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 23.946px;
    height: 27.803px;
    left: 0.656px;
    top: 1.901px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`
const StyledPath9 = styled.path`
    fill: rgba(206,132,82,1);
`
const StyledSvg9 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 25.676px;
    height: 27.803px;
    left: 0px;
    top: 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`
const StyledPath10 = styled.path`
    fill: rgba(255,230,123,1);
`
const StyledSvg10 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 3.635px;
    height: 2.773px;
    left: 4.598px;
    top: 28.797px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`
const StyledDiv11 = styled.div`
    position: absolute;
    width: 10px;
    height: 11px;
    left: 219px;
    top: 22px;
    overflow: visible;
`
const StyledElli12 = styled.ellipse`
    fill: rgba(217,175,81,1);
`
const StyledSvg12 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 10px;
    height: 10px;
    left: 0px;
    top: 0px;
`
const StyledElli13 = styled.ellipse`
    fill: rgba(237,191,88,1);
`
const StyledSvg13 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 10px;
    height: 10px;
    left: 0px;
    top: 1px;
`
const StyledDiv14 = styled.div`
    position: absolute;
    width: 10px;
    height: 11px;
    left: 12px;
    top: 22px;
    overflow: visible;
`
const StyledElli15 = styled.ellipse`
    fill: rgba(217,175,81,1);
`
const StyledSvg15 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 10px;
    height: 10px;
    left: 0px;
    top: 0px;
`
const StyledElli16 = styled.ellipse`
    fill: rgba(237,191,88,1);
`
const StyledSvg16 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 10px;
    height: 10px;
    left: 0px;
    top: 1px;
`

const StyledTitleContainer = styled.div`
    position: absolute;
    width: 110px;
    height: 29px;
    left: 37.631px;
    top: 0.996px;
    overflow: visible;
`

const StyledTitle = styled.div`
    left: 0px;
    top: 0px;
    position: absolute;
    overflow: visible;
    width: 111px;
    white-space: nowrap;
    line-height: 45px;
    margin-top: -10.5px;
    text-align: center;
    font-family: SDGothicNeoRound-gBd;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(51, 51, 51, 1);
`
const StyledIconContainer = styled.div`
    position: absolute;
    width: 14.626px;
    height: 17.745px;
    left: 5.142px;
    top: 3.997px;
    overflow: visible;
`
const StyledIconTop = styled.div`
    transform: translate(0.06px, 0.995px) matrix(1, 0.0001, 0, 1, 0.4879, -0.6104) rotate(5.937deg);
    transform-origin: center;
    left: 0px;
    top: 0px;
    position: absolute;
    overflow: visible;
    width: 9px;
    white-space: nowrap;
    line-height: 12px;
    margin-top: -1.5px;
    text-align: left;
    font-family: SDGothicNeoRound-hEb;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: -0.2px;
`
const StyledIconBottom = styled.div`
    left: 8.627px;
    top: 8.745px;
    position: absolute;
    overflow: visible;
    width: 7px;
    white-space: nowrap;
    text-align: left;
    font-family: SDGothicNeoRound-hEb;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    color: rgba(255, 255, 157, 1);
`

type Props = {

}
export const TodayStudyTitle: (props: Props) => JSX.Element = (props: Props) => {
    return (
        <StyledContainer>
            <StyledDiv1>
                <StyledSvg2>
                    <StyledRect2 rx="27" ry="27" x="0" y="0" width="241" height="54">
                    </StyledRect2>
                </StyledSvg2>
                <StyledSvg3>
                    <StyledRect3 rx="27" ry="27" x="0" y="0" width="241" height="54">
                    </StyledRect3>
                </StyledSvg3>
            </StyledDiv1>
            <StyledDiv4>
                <StyledTitleContainer>
                    <StyledTitle>
                        <span>오늘의 공부</span>
                    </StyledTitle>
                </StyledTitleContainer>
                <StyledDiv5>
                    <StyledDiv6>
                        <StyledSvg7 viewBox="6.217 7.654 25.244 27.803">
                            <StyledPath7
                                  d="M 27.56058502197266 35.45678329467773 L 10.117751121521 35.45678329467773 C 7.963705539703369 35.45678329467773 6.216950416564941 33.71002960205078 6.216950416564941 31.55598640441895 L 6.216950416564941 11.55522632598877 C 6.216950416564941 9.400327682495117 7.963705539703369 7.653573989868164 10.117751121521 7.653573989868164 L 27.56058502197266 7.653573989868164 C 29.71547889709473 7.653573989868164 31.46138572692871 9.400327682495117 31.46138572692871 11.55522632598877 L 31.46138572692871 31.55598640441895 C 31.46138572692871 33.71002960205078 29.71547889709473 35.45678329467773 27.56058502197266 35.45678329467773">
                            </StyledPath7>
                        </StyledSvg7>
                        <StyledSvg8 viewBox="6.668 6.941 23.946 27.803">
                            <StyledPath8
                                  d="M 26.31521034240723 34.7446403503418 L 10.96677780151367 34.7446403503418 C 8.592897415161133 34.7446403503418 6.668059349060059 32.82064819335938 6.668059349060059 30.44591331481934 L 6.668059349060059 11.24014282226562 C 6.668059349060059 8.866259574890137 8.592897415161133 6.941421508789062 10.96677780151367 6.941421508789062 L 26.31521034240723 6.941421508789062 C 28.68908882141113 6.941421508789062 30.61393165588379 8.866259574890137 30.61393165588379 11.24014282226562 L 30.61393165588379 30.44591331481934 C 30.61393165588379 32.82064819335938 28.68908882141113 34.7446403503418 26.31521034240723 34.7446403503418">
                            </StyledPath8>
                        </StyledSvg8>
                        <StyledSvg9 viewBox="6.216 5.633 25.676 27.803">
                            <StyledPath9
                                  d="M 29.12270164489746 33.43589401245117 L 8.987313270568848 33.43589401245117 C 7.456986904144287 33.43589401245117 6.216365814208984 32.19527435302734 6.216365814208984 30.66580009460449 L 6.216365814208984 8.403631210327148 C 6.216365814208984 6.873303890228271 7.456986904144287 5.632683277130127 8.987313270568848 5.632683277130127 L 29.12270164489746 5.632683277130127 C 30.65302467346191 5.632683277130127 31.89279556274414 6.873303890228271 31.89279556274414 8.403631210327148 L 31.89279556274414 30.66580009460449 C 31.89279556274414 32.19527435302734 30.65302467346191 33.43589401245117 29.12270164489746 33.43589401245117">
                            </StyledPath9>
                        </StyledSvg9>
                        <StyledSvg10 viewBox="9.382 25.458 3.635 2.774">
                            <StyledPath10
                                  d="M 13.01698970794678 28.23150825500488 L 11.19951152801514 27.21071815490723 L 9.382036209106445 28.23150825500488 L 9.382036209106445 25.45800018310547 L 13.01698970794678 25.45800018310547 L 13.01698970794678 28.23150825500488 Z">
                            </StyledPath10>
                        </StyledSvg10>
                    </StyledDiv6>
                    <StyledIconContainer>
                        <StyledIconTop>
                            <span>가</span>
                        </StyledIconTop>
                        <StyledIconBottom>
                            <span>A</span>
                        </StyledIconBottom>
                    </StyledIconContainer>
                </StyledDiv5>
            </StyledDiv4>
            <StyledDiv11>
                <StyledSvg12>
                    <StyledElli12 rx="5" ry="5" cx="5" cy="5">
                    </StyledElli12>
                </StyledSvg12>
                <StyledSvg13>
                    <StyledElli13 rx="5" ry="5" cx="5" cy="5">
                    </StyledElli13>
                </StyledSvg13>
            </StyledDiv11>
            <StyledDiv14>
                <StyledSvg15>
                    <StyledElli15 rx="5" ry="5" cx="5" cy="5">
                    </StyledElli15>
                </StyledSvg15>
                <StyledSvg16>
                    <StyledElli16 rx="5" ry="5" cx="5" cy="5">
                    </StyledElli16>
                </StyledSvg16>
            </StyledDiv14>
        </StyledContainer>
    )
}
