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
    StyledRect2, StyledRect3, StyledRect4, StyledRect5, StyledRect6, StyledPath8,
} from './styles/todayStudy';
const StyledRect1 = styled.rect`
    fill: rgba(249,155,55,1);
`;
const StyledPath7 = styled.path`
    fill: rgba(249,155,55,1);
`;
const StyledTitle = styled.div`
    left: 32px;
    top: 32px;
    position: absolute;
    overflow: visible;
    width: 61px;
    white-space: nowrap;
    line-height: 22px;
    margin-top: -2.5px;
    text-align: center;
    font-family: Sandoll GothicNeoRound;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    color: rgba(51, 51, 51, 1);
    letter-spacing: -0.5px;    
`
type Props = {
    onClick: (params: any) => void;
};

export const TodayStudyCard70: (props: Props) => JSX.Element = (props: Props) => {
    const handleClick = () => {
        props.onClick({});
    };
    return (
        <StyledContainer onClick={handleClick}>
            <StyledSvg1>
                <StyledRect1 rx="11" ry="11" x="0" y="0" width="122" height="150">
                </StyledRect1>
            </StyledSvg1>
            <StyledSvg2>
                <StyledRect2 rx="10" ry="10" x="0" y="0" width="25" height="150">
                </StyledRect2>
            </StyledSvg2>
            <StyledSvg3>
                <StyledRect3 rx="10" ry="10" x="0" y="0" width="25" height="150">
                </StyledRect3>
            </StyledSvg3>
            <StyledSvg4>
                <StyledRect4 rx="10" ry="10" x="0" y="0" width="25" height="150">
                </StyledRect4>
            </StyledSvg4>
            <StyledSvg5>
                <StyledRect5 rx="10" ry="10" x="0" y="0" width="25" height="150">
                </StyledRect5>
            </StyledSvg5>
            <StyledSvg6>
                <StyledRect6 rx="10" ry="10" x="0" y="0" width="25" height="150">
                </StyledRect6>
            </StyledSvg6>
            <StyledSvg7 viewBox="0 0 114 150">
                <StyledPath7
                    d="M 8 0 L 106 0 C 110.4182815551758 0 114 3.581721782684326 114 8 L 114 142 C 114 146.4182739257812 110.4182815551758 150 106 150 L 8 150 C 3.581721782684326 150 0 146.4182739257812 0 142 L 0 8 C 0 3.581721782684326 3.581721782684326 0 8 0 Z">
                </StyledPath7>
            </StyledSvg7>
            <StyledSvg8 viewBox="231.007 188.989 100.205 75.242">
                <StyledPath8
                    d="M 282.2928161621094 188.9963226318359 C 282.2928161621094 188.9963226318359 262.34423828125 188.4354095458984 247.6238708496094 197.0015716552734 C 232.9031982421875 205.5675811767578 230.8993072509766 225.2403717041016 231.0115356445312 227.0209197998047 C 231.12353515625 228.80126953125 231.6004638671875 257.998046875 265.6804809570312 263.0442504882812 C 299.7607421875 268.0904235839844 324.2355651855469 256.2605895996094 328.5184936523438 242.3641357421875 C 332.8013000488281 228.4678039550781 332.4089965820312 213.3474578857422 324.1846923828125 205.0066680908203 C 315.9605102539062 196.6659545898438 306.6520385742188 188.7923431396484 282.2928161621094 188.9963226318359 Z">
                </StyledPath8>
            </StyledSvg8>
            <StyledBackgroundImage
                src="/cards/todayStudy/background.png"
                srcSet="/cards/todayStudy/background.png 1x, /cards/todayStudy/background@2x.png 2x"
            />
            <StyledImage src="/cards/todayStudy/70.png" srcSet="/cards/todayStudy/70.png 1x, /cards/todayStudy/70@2x.png 2x"/>
            <StyledTitle>
                <span>초등 수학<br/>개념사전</span>
            </StyledTitle>

        </StyledContainer>
    );
};
