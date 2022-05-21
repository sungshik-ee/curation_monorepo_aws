import React from 'react';
import { TodayStudyCard60 } from './TodayStudyCard60';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체메뉴/오늘의공부/최상위카드',
    component: TodayStudyCard60,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof TodayStudyCard60> = (args) => <TodayStudyCard60 {...args} />;

export const 초등국어교과서읽기 = Template.bind({});
초등국어교과서읽기.args = {};
