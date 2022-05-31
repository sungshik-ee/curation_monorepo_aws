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
const StyledAside = styled.div`
    height: 37rem;
    overflow: auto;
`;
const StyledContent = styled.div`
    height: 37rem;
    overflow: auto;
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
                                        <Aside as={StyledAside}>
                                            <AsideLayout onClick={handleAsideClick} />
                                        </Aside>
                                        <Content as={StyledContent}>
                                            <ContentLayout onClick={handleCardClick} />
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
