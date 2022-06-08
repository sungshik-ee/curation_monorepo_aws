import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 12px;
    left: 0;
    //top: 148px;
    overflow: visible;
`;
const StyledSvg1 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 10px;
    left: 0;
    top: 2px;
`;

const StyledSvg2 = styled.svg`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 10px;
    left: 0;
    top: 0;
`;
const StyledRect1 = styled.rect`
    fill: rgba(139, 112, 75, 1);
`;
const StyledRect2 = styled.rect`
    fill: rgba(168, 135, 87, 1);
`;

type Props = {};
export const TodayStudyDrawStand: (props: Props) => JSX.Element = (props: Props) => {
    return (
        <StyledContainer>
            <StyledSvg1>
                <StyledRect1 rx="5" ry="5" x="0" y="0" width="100%" height="10"></StyledRect1>
            </StyledSvg1>
            <StyledSvg2>
                <StyledRect2 rx="5" ry="5" x="0" y="0" width="100%" height="10"></StyledRect2>
            </StyledSvg2>
        </StyledContainer>
    );
};
