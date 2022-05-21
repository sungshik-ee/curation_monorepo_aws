import React from 'react';
import { TodayStudyCard40 } from './TodayStudyCard40';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/오늘의공부/최상위카드',
    component: TodayStudyCard40,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard40> = (args) => <TodayStudyCard40 {...args} />;

export const 파닉스영어 = Template.bind({});
파닉스영어.args = {};
