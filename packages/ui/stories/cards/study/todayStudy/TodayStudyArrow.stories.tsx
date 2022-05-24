import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TodayStudyArrow } from './TodayStudyArrow';

export default {
    title: '학생앱/전체메뉴/오늘의공부/배경',
    component: TodayStudyArrow,
    argTypes: {
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyArrow> = (args) => <TodayStudyArrow {...args} />;

export const 화살표 = Template.bind({});
화살표.args = {};
