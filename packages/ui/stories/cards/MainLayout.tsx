import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';

import { HeaderLayout } from './HeaderLayout';
import { ContentLayout } from './ContentLayout';
import { AsideLayout } from './AsideLayout';

const StyledContainer = styled.div`
    width: 80rem;
    //height: 100%;
`;

type Props = {};
const areas = `
    header
    footer
`;

export const MainLayout: FC<Props> = (props: Props) => {
    const handleTopClick = (key: string) => {
        console.log(key);
    };
    const handleCardClick = (key: string) => {
        console.log(key);
    };
    const handleAsideClick = (key: string) => {
        console.log(key);
    };
    return (
        <StyledContainer>
            <Composition areas={areas}>
                {({ Header, Footer }) => (
                    <>
                        <Header>
                            <HeaderLayout onClick={handleTopClick} />
                        </Header>
                        <Footer>
                            <Composition areas="aside content">
                                {({ Aside, Content }) => (
                                    <>
                                        <Aside>
                                            <AsideLayout onClick={handleAsideClick} />
                                        </Aside>
                                        <Content>
                                            <ContentLayout onClick={handleCardClick} />
                                        </Content>
                                    </>
                                )}
                            </Composition>
                        </Footer>
                    </>
                )}
            </Composition>
        </StyledContainer>
    );
};
