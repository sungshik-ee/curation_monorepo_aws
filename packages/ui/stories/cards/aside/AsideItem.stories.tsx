import React from 'react';
import { AsideItem } from './AsideItem';
import { Icon10 } from './Icon10';
import { Icon20 } from './Icon20';
import { Icon30 } from './Icon30';
import { Icon40 } from './Icon40';
import { Icon50 } from './Icon50';
import { Icon60 } from './Icon60';
import { Icon70 } from './Icon70';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const icons = { Icon10, Icon20, Icon30, Icon40, Icon50, Icon60, Icon70 };

export default {
    title: '학생앱/전체보기/레이아웃',
    component: AsideItem,
    argTypes: {
        onClick: { action: '클릭됨' },
        icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: 'select',
                labels: {
                    Icon10: '오늘의 공부',
                    Icon20: '동화',
                    Icon30: '동요',
                    Icon40: '즐거운 영어',
                    Icon50: '배경지식',
                    Icon60: '학습놀이터',
                    Icon70: '신나는애니',
                },
            },
        },
        active: {
            control: 'boolean',
        },
        color: {
            control: {
                type: 'radio',
                options: [
                    'rgba(254,225,101,1)',
                    'rgba(215,238,109,1)',
                    'rgba(174,235,253,1)',
                    'rgba(254,201,222,1)',
                    'rgba(193,235,200,1)',
                ],
            },
        },
        label: {
            control: {
                type: 'select',
                options: [
                    '오늘의 공부',
                    '동화',
                    '동요',
                    '즐거운 영어',
                    '배경지식',
                    '학습놀이터',
                    '신나는애니',
                ],
            },
        },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof AsideItem> = (args) => <AsideItem {...args} />;

export const AsideButton = Template.bind({});
AsideButton.args = {};
