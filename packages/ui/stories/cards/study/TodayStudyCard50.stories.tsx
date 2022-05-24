import React from 'react';
import { TodayStudyCard50 } from './TodayStudyCard50';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/오늘의공부/최상위카드',
    component: TodayStudyCard50,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard50> = (args) => <TodayStudyCard50 {...args} />;

export const 학교공부따라잡기 = Template.bind({});
학교공부따라잡기.args = {};
