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
    width: 33.339px;
    height: 33.339px;
`;
const StyledImage = styled.img`
    position: absolute;
    width: 33.339px;
    height: 33.339px;
    left: 0;
    top: 0;
`;

type Props = {};
export const Icon50: FC<Props> = (props: Props) => {
    return (
        <Box as={StyledContainer} flex justifyContent="center" alignItems="center">
            <StyledIconContainer>
                <StyledImage
                    src="/cards/aside/50.png"
                    srcSet="/cards/aside/50.png 1x, /cards/aside/50@2x.png 2x"
                />
            </StyledIconContainer>
        </Box>
    );
};
