import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
import _ from 'lodash-es';

import { TodayStudyCard10 } from './TodayStudyCard10';
import { TodayStudyCard20 } from './TodayStudyCard20';
import { TodayStudyCard30 } from './TodayStudyCard30';
import { TodayStudyCard40 } from './TodayStudyCard40';
import { TodayStudyCard50 } from './TodayStudyCard50';
import { TodayStudyCard60 } from './TodayStudyCard60';
import { TodayStudyCard70 } from './TodayStudyCard70';
import { TodayStudyDrawStand } from './TodayStudyDrawStand';
import { TodayStudyTitle } from './TodayStudyTitle';
import { TodayStudyArrow } from './TodayStudyArrow';
import { TodayStudyBackground } from './TodayStudyBackground';

const StyledContainer = styled.div`
    position: relative;
    background-color: rgba(242, 234, 205, 1);
    width: 1070px;
`;
const StyledContentsContainer = styled.div`
    padding-left: 115px;
    padding-right: 116px;
`;
const Styled3_4Width = styled.div`
    width: 75%;
`;
const StyledHalfWidth = styled.div`
    width: 50%;
`;
const StyledTitlePadding = styled.div`
    padding-top: 38px;
`;
const StyledCardPadding = styled.div`
    padding-top: 39px;
    padding-left: 46px;
    padding-right: 53px;
`;
const StyledArrowPadding = styled.div`
    padding-top: 38px;
    padding-bottom: 30px;
`;

type Props = {
    onClick: (params: any) => void;
};

const areas = `
    title
    contents
    arrow
`;

export const TodayStudy: FC<Props> = (props: Props) => {
    const throttledHandleClick = _.throttle((key: string) => {
        props.onClick(key);
    }, 3000);
    const handleClick = (key: string) => {
        throttledHandleClick(key);
    };
    return (
        <StyledContainer>
            <Composition gap="30" areas={areas}>
                {({ Title, Contents, Arrow }) => (
                    <>
                        <Title>
                            <Box as={StyledTitlePadding} flex justifyContent="center">
                                <TodayStudyTitle />
                            </Box>
                        </Title>
                        <Contents>
                            <StyledContentsContainer>
                                <Box as={StyledCardPadding} flex justifyContent="space-between">
                                    <TodayStudyCard10 onClick={handleClick} />
                                    <TodayStudyCard20 onClick={handleClick} />
                                    <TodayStudyCard30 onClick={handleClick} />
                                    <TodayStudyCard40 onClick={handleClick} />
                                </Box>
                                <Box flex justifyContent="start">
                                    <TodayStudyDrawStand />
                                </Box>

                                <Styled3_4Width>
                                    <Box as={StyledCardPadding} flex justifyContent="space-between">
                                        <TodayStudyCard50 onClick={handleClick} />
                                        <TodayStudyCard60 onClick={handleClick} />
                                        <TodayStudyCard70 onClick={handleClick} />
                                    </Box>
                                    <TodayStudyDrawStand />
                                </Styled3_4Width>
                            </StyledContentsContainer>
                        </Contents>
                        <Arrow>
                            <Box as={StyledArrowPadding} flex justifyContent="center">
                                <TodayStudyArrow />
                            </Box>
                        </Arrow>
                        <TodayStudyBackground />
                    </>
                )}
            </Composition>
        </StyledContainer>
    );
};
