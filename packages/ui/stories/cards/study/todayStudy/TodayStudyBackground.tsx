import React, { FC } from 'react';
import styled from 'styled-components';

const StyledDiv1 = styled.div`
    opacity: 0.707;
    position: absolute;
    width: 51.272px;
    height: 42.913px;
    left: 80.105px;
    top: 74.291px;
    overflow: visible;
`;
const StyledImg1 = styled.img`
    position: absolute;
    width: 51.272px;
    height: 42.913px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledDiv2 = styled.div`
    opacity: 0.18;
    position: absolute;
    width: 24.157px;
    height: 24.63px;
    left: 750.484px;
    top: 396.352px;
    overflow: visible;
`;
const StyledImg2 = styled.img`
    position: absolute;
    width: 24.157px;
    height: 24.63px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledDiv3 = styled.div`
    opacity: 0.18;
    position: absolute;
    width: 24.157px;
    height: 24.63px;
    left: 981.484px;
    top: 117.205px;
    overflow: visible;
`;
const StyledImg3 = styled.img`
    position: absolute;
    width: 24.157px;
    height: 24.63px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledDiv4 = styled.div`
    opacity: 0.18;
    position: absolute;
    width: 20px;
    height: 20.392px;
    left: 1012px;
    top: 502.646px;
    overflow: visible;
`;
const StyledImg4 = styled.img`
    position: absolute;
    width: 20px;
    height: 20.392px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledDiv5 = styled.div`
    opacity: 0.21;
    position: absolute;
    width: 20px;
    height: 20.392px;
    left: 60.105px;
    top: 187.814px;
    overflow: visible;
`;
const StyledImg5 = styled.img`
    position: absolute;
    width: 20px;
    height: 20.392px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;
const StyledDiv6 = styled.div`
    opacity: 0.18;
    position: absolute;
    width: 28.564px;
    height: 29.124px;
    left: 158.379px;
    top: 60px;
    overflow: visible;
`;
const StyledImg6 = styled.img`
    position: absolute;
    width: 28.564px;
    height: 29.124px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;

type Props = {};
export const TodayStudyBackground: (props: Props) => JSX.Element = (props: Props) => {
    return (
        <>
            <StyledDiv1>
                <StyledImg1
                    src="/cards/todayStudy/ufo.png"
                    srcSet="/cards/todayStudy/ufo.png 1x, /cards/todayStudy/ufo@2x.png 2x"
                />
            </StyledDiv1>
            <StyledDiv2>
                <StyledImg2
                    src="/cards/todayStudy/star24*25.png"
                    srcSet="/cards/todayStudy/star24*25.png 1x, /cards/todayStudy/star24*25@2x.png 2x"
                />
            </StyledDiv2>
            <StyledDiv3>
                <StyledImg3
                    src="/cards/todayStudy/star24*25.png"
                    srcSet="/cards/todayStudy/star24*25.png 1x, /cards/todayStudy/star24*25@2x.png 2x"
                />
            </StyledDiv3>
            <StyledDiv4>
                <StyledImg4
                    src="/cards/todayStudy/star20*20.png"
                    srcSet="/cards/todayStudy/star20*20.png 1x, /cards/todayStudy/star20*20@2x.png 2x"
                />
            </StyledDiv4>
            <StyledDiv5>
                <StyledImg5
                    src="/cards/todayStudy/star20*20.png"
                    srcSet="/cards/todayStudy/star20*20.png 1x, /cards/todayStudy/star20*20@2x.png 2x"
                />
            </StyledDiv5>
            <StyledDiv6>
                <StyledImg6
                    src="/cards/todayStudy/star29*29.png"
                    srcSet="/cards/todayStudy/star29*29.png 1x, /cards/todayStudy/star29*29@2x.png 2x"
                />
            </StyledDiv6>
        </>
    );
};
