import React, { FC, useState } from 'react';
import _ from 'lodash-es';
import styled from 'styled-components';
import { Box, Composition } from 'atomic-layout';
import { AsideItem } from './aside/AsideItem';
import { Icon10 } from './aside/Icon10';
import { Icon20 } from './aside/Icon20';
import { Icon30 } from './aside/Icon30';
import { Icon40 } from './aside/Icon40';
import { Icon50 } from './aside/Icon50';
import { Icon60 } from './aside/Icon60';
import { Icon70 } from './aside/Icon70';

const StyledContainer = styled.aside`
    width: 13.125rem;
    height: 37rem;
    background-color: #fffdf4;
    margin-top: 3.625rem;
    margin-left: 1.125rem;
    overflow: hidden;
`;
type AsideItem = {
    id: string;
    icon: FC;
    color: string;
    label: string;
};

type Props = {
    onClick: (params: any) => void;
    key?: string;
    items: Array<AsideItem>;
};
export const AsideLayout: FC<Props> = (props: Props) => {
    const [selected, setSelected] = useState<string | null>('ASIDE_10');
    const throttledHandleClick = _.throttle((key: string) => {
        console.log(key);
        setSelected(key);
        props.onClick(key);
    }, 1000);
    const handleClick = (id: string) => {
        throttledHandleClick(id);
    };
    const isSelected = (item: AsideItem) => {
        return selected === item.id;
    };
    return (
        <StyledContainer>
            <Box flex flexDirection="column" alignItems="start" gap="1rem">
                {props?.items?.map((item) => (
                    <AsideItem
                        onClick={handleClick}
                        id={item.id}
                        icon={item.icon}
                        color={item.color}
                        label={item.label}
                        active={isSelected(item)}
                    />
                ))}
            </Box>
        </StyledContainer>
    );
};
AsideLayout.defaultProps = {
    key: 'NAV_LAYOUT',
    items: [
        { icon: Icon10, id: 'ASIDE_10', color: 'rgba(254, 225, 101, 1)', label: '오늘의 공부' },
        { icon: Icon20, id: 'ASIDE_20', color: 'rgba(215,238,109,1)', label: '동화' },
        { icon: Icon30, id: 'ASIDE_30', color: 'rgba(174,235,253,1)', label: '동요' },
        { icon: Icon40, id: 'ASIDE_40', color: 'rgba(254,201,222,1)', label: '즐거운 영어' },
        { icon: Icon50, id: 'ASIDE_50', color: 'rgba(193,235,200,1)', label: '배경지식' },
        { icon: Icon60, id: 'ASIDE_60', color: 'rgba(254, 225, 101, 1)', label: '학습놀이터' },
        { icon: Icon70, id: 'ASIDE_70', color: 'rgba(254, 225, 101, 1)', label: '신나는애니' },
    ],
};
