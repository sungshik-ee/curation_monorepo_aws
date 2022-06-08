import React from 'react';
import { TodayStudyDrawStand } from './TodayStudyDrawStand';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/오늘의공부/배경',
    component: TodayStudyDrawStand,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyDrawStand> = (args) => (
    <TodayStudyDrawStand {...args} />
);

export const 서랍받침대 = Template.bind({});
서랍받침대.args = {};
