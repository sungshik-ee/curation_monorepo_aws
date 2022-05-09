import React from 'react';
import { Buttons } from './Buttons';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Button/Sets',
    component: Buttons,
    argTypes: {
        onSelect: { action: '선택 변경됨' },
    },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedLevel: 'RA',
};

export const Custom = Template.bind({});
Custom.args = {
    selectedLevel: 'B',
    buttonSets: [
        [
            { key: 'A', label: '사과', activeType: 'RED' },
            { key: 'B', label: '오렌지', activeType: 'BLUE' },
            { key: 'C', label: '포도', activeType: 'RED' },
            { key: 'G', label: '시금치', activeType: 'BLUE' },
        ],
        [
            { key: 'D', label: '당근', activeType: 'RED' },
            { key: 'E', label: '무', activeType: 'BLUE' },
        ],
        [{ key: 'F', label: '옥수수', activeType: 'RED' }],
    ],
};
