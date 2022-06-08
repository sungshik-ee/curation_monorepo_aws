import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TodayStudyTitle } from './TodayStudyTitle';

export default {
    title: '학생앱/전체보기/오늘의공부/배경',
    component: TodayStudyTitle,
    argTypes: {},
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyTitle> = (args) => <TodayStudyTitle {...args} />;

export const 제목 = Template.bind({});
제목.args = {};
