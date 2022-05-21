import React from 'react';
import { TodayStudyCard70 } from './TodayStudyCard70';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/오늘의공부/최상위카드',
    component: TodayStudyCard70,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard70> = (args) => <TodayStudyCard70 {...args} />;

export const 초등수학개념사전 = Template.bind({});
초등수학개념사전.args = {};
