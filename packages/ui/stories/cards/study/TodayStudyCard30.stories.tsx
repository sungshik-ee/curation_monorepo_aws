import React from 'react';
import { TodayStudyCard30 } from './TodayStudyCard30';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/오늘의공부/최상위카드',
    component: TodayStudyCard30,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard30> = (args) => <TodayStudyCard30 {...args} />;

export const 스토리영어 = Template.bind({});
스토리영어.args = {};
