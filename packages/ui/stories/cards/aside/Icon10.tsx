import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
const StyledContainer = styled.div`
    width: 37px;
    height: 37px;
`;
const StyledIconContainer = styled.div`
    position: relative;
    width: 18.817px;
    height: 23.137px;
`;
const StyledIconBackgroundContainer = styled.div`
    position: absolute;
    width: 18.817px;
    height: 23.137px;
    left: 0px;
    top: 0px;
    overflow: visible;
`;

const StyledPath1 = styled.path`
    fill: rgba(188, 116, 68, 1);
`;
const StyledSvg1 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 18.501px;
    height: 20.376px;
    left: 0.001px;
    top: 2.151px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath2 = styled.path`
    fill: rgba(244, 242, 228, 1);
`;
const StyledSvg2 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 17.549px;
    height: 20.376px;
    left: 0.48px;
    top: 1.393px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath3 = styled.path`
    fill: rgba(206, 132, 82, 1);
`;
const StyledSvg3 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 18.816px;
    height: 20.376px;
    left: 0.001px;
    top: 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledPath4 = styled.path`
    fill: rgba(255, 230, 123, 1);
`;
const StyledSvg4 = styled.svg`
    overflow: visible;
    position: absolute;
    width: 2.664px;
    height: 2.033px;
    left: 3.37px;
    top: 21.104px;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const StyledIconTextContainer = styled.div`
    position: absolute;
    width: 13.187px;
    height: 15.88px;
    left: 1.875px;
    top: 2.504px;
    overflow: visible;
`;
const StyledIconTextTop = styled.div`
    transform: translate(-0.066px, 0.995px) matrix(1, 0.0001, 0, 1, 0.5131, -0.6568)
        rotate(5.937deg);
    transform-origin: center;
    left: 0px;
    top: 0px;
    position: absolute;
    overflow: visible;
    width: 8px;
    white-space: nowrap;
    line-height: 12px;
    margin-top: -2px;
    text-align: left;
    font-family: SDGothicNeoRound-hEb;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: -0.2px;
`;
const StyledIconTextBottom = styled.div`
    left: 8.188px;
    top: 8.88px;
    position: absolute;
    overflow: visible;
    width: 6px;
    white-space: nowrap;
    text-align: left;
    font-family: SDGothicNeoRound-hEb;
    font-style: normal;
    font-weight: normal;
    font-size: 7px;
    color: rgba(255, 255, 157, 1);
`;
const StyledText = styled.div`
    white-space: nowrap;
    text-align: left;
    font-family: SDGothicNeoRound-gBd;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    //flex-basis: fit-content;
`;

type Props = {};
export const Icon10: FC<Props> = (props: Props) => {
    return (
        <Box as={StyledContainer} flex justifyContent="center" alignItems="center">
            <StyledIconContainer>
                <StyledIconBackgroundContainer>
                    <StyledSvg1 viewBox="6.217 7.654 18.501 20.376">
                        <StyledPath1 d="M 21.85888671875 28.02946662902832 L 9.075700759887695 28.02946662902832 C 7.497079372406006 28.02946662902832 6.216950416564941 26.74933624267578 6.216950416564941 25.17072105407715 L 6.216950416564941 10.51294231414795 C 6.216950416564941 8.933701515197754 7.497079372406006 7.653573036193848 9.075700759887695 7.653573036193848 L 21.85888671875 7.653573036193848 C 23.43812370300293 7.653573036193848 24.71763229370117 8.933701515197754 24.71763229370117 10.51294231414795 L 24.71763229370117 25.17072105407715 C 24.71763229370117 26.74933624267578 23.43812370300293 28.02946662902832 21.85888671875 28.02946662902832"></StyledPath1>
                    </StyledSvg1>
                    <StyledSvg2 viewBox="6.668 6.941 17.549 20.376">
                        <StyledPath2 d="M 21.06670761108398 27.31731605529785 L 9.818425178527832 27.31731605529785 C 8.078700065612793 27.31731605529785 6.6680588722229 25.90730285644531 6.6680588722229 24.16695213317871 L 6.6680588722229 10.09178447723389 C 6.6680588722229 8.352059364318848 8.078700065612793 6.941421985626221 9.818425178527832 6.941421985626221 L 21.06670761108398 6.941421985626221 C 22.80642890930176 6.941421985626221 24.21707153320312 8.352059364318848 24.21707153320312 10.09178447723389 L 24.21707153320312 24.16695213317871 C 24.21707153320312 25.90730285644531 22.80642890930176 27.31731605529785 21.06670761108398 27.31731605529785"></StyledPath2>
                    </StyledSvg2>
                    <StyledSvg3 viewBox="6.216 5.633 18.817 20.376">
                        <StyledPath3 d="M 23.0035457611084 26.00857543945312 L 8.247085571289062 26.00857543945312 C 7.125568866729736 26.00857543945312 6.216365337371826 25.09937286376953 6.216365337371826 23.97847747802734 L 6.216365337371826 7.663403511047363 C 6.216365337371826 6.541885375976562 7.125568866729736 5.632682800292969 8.247085571289062 5.632682800292969 L 23.0035457611084 5.632682800292969 C 24.12505912780762 5.632682800292969 25.03364181518555 6.541885375976562 25.03364181518555 7.663403511047363 L 25.03364181518555 23.97847747802734 C 25.03364181518555 25.09937286376953 24.12505912780762 26.00857543945312 23.0035457611084 26.00857543945312"></StyledPath3>
                    </StyledSvg3>
                    <StyledSvg4 viewBox="9.382 25.458 2.664 2.033">
                        <StyledPath4 d="M 12.04595756530762 27.49059104919434 L 10.71399593353271 26.74249649047852 L 9.382036209106445 27.49059104919434 L 9.382036209106445 25.45799827575684 L 12.04595756530762 25.45799827575684 L 12.04595756530762 27.49059104919434 Z"></StyledPath4>
                    </StyledSvg4>
                    <StyledIconTextContainer>
                        <StyledIconTextTop>
                            <span>가</span>
                        </StyledIconTextTop>
                        <StyledIconTextBottom>
                            <span>A</span>
                        </StyledIconTextBottom>
                    </StyledIconTextContainer>
                </StyledIconBackgroundContainer>
            </StyledIconContainer>
        </Box>
    );
};
