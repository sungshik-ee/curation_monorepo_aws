import React from 'react';
import { TodayStudy } from './TodayStudy';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/오늘의공부',
    component: TodayStudy,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudy> = (args) => <TodayStudy {...args} />;

export const 전체 = Template.bind({});
전체.args = {};
