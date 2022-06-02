import React, { FC } from 'react';
import _ from 'lodash-es';
import styled from 'styled-components';
import { TodayStudy } from './study/todayStudy/TodayStudy';

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
        <>
            <TodayStudy onClick={handleClick} />
        </>
    );
};
ContentLayout.defaultProps = {
    key: 'CONTENT_LAYOUT',
};
