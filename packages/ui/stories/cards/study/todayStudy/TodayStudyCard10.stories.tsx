import React from 'react';
import { TodayStudyCard10 } from './TodayStudyCard10';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/오늘의공부/최상위카드',
    component: TodayStudyCard10,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard10> = (args) => <TodayStudyCard10 {...args} />;

export const 한글국어 = Template.bind({});
한글국어.args = {};
