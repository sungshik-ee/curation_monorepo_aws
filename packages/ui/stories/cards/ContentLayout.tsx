import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { TodayStudy } from './study/todayStudy/TodayStudy';

const StyledContainer = styled.div`
    //margin-left: 13.125rem;
`;

type Props = {
    onClick: (params: any) => void;
    key?: string;
};
export const ContentLayout: FC<Props> = (props: Props) => {
    const throttledHandleClick = _.throttle((key?: string) => {
        props.onClick(props.key);
    }, 3000);
    const handleClick = () => {
        throttledHandleClick(props.key);
    };
    return (
        <StyledContainer>
            <TodayStudy onClick={handleClick} />
        </StyledContainer>
    );
};
ContentLayout.defaultProps = {
    key: 'CONTENT_LAYOUT',
};
