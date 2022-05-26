import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TodayStudyBackground } from './TodayStudyBackground';

export default {
    title: '학생앱/전체보기/오늘의공부/배경',
    component: TodayStudyBackground,
    argTypes: {},
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyBackground> = (args) => (
    <TodayStudyBackground {...args} />
);

export const 배경 = Template.bind({});
배경.args = {};
