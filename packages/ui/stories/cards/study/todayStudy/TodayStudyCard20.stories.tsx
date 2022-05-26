import React from 'react';
import { TodayStudyCard20 } from './TodayStudyCard20';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/오늘의공부/최상위카드',
    component: TodayStudyCard20,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard20> = (args) => <TodayStudyCard20 {...args} />;

export const 영역별수학 = Template.bind({});
영역별수학.args = {};
