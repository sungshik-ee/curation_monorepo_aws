import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    width: 35.837px;
    height: 16.747px;    
    overflow: visible;
`
const StyledRect1 = styled.rect`
    fill: rgba(221,176,158,1);
`
const StyledSvg1 = styled.svg`
    width: 22px;
    height: 6px;
    position: absolute;
    overflow: visible;
    transform: translate(-791.082px, -605.627px) matrix(1, 0, 0, 1, 805, 611) rotate(-32deg);
    transform-origin: center;
`
const StyledRect2 = styled.rect`
    fill: rgba(221,176,158,1);
`
const StyledSvg2 = styled.svg`
    width: 22px;
    height: 6px;
    position: absolute;
    overflow: visible;
    transform: translate(-791.082px, -605.627px) matrix(1, 0, 0, 1, 791, 611) rotate(212deg);
    transform-origin: center;
`

type Props = {

}
export const TodayStudyArrow: (props: Props) => JSX.Element = (props: Props) => {
    return (
        <StyledContainer>
            <StyledSvg1>
                <StyledRect1 rx="3" ry="3" x="0" y="0" width="22" height="6">
                </StyledRect1>
            </StyledSvg1>
            <StyledSvg2>
                <StyledRect2 rx="2.9999916553497314" ry="2.9999916553497314" x="0" y="0" width="22" height="6">
                </StyledRect2>
            </StyledSvg2>
        </StyledContainer>
    )
}
