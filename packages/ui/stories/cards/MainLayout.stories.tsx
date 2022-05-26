import React from 'react';
import { MainLayout } from './MainLayout';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기',
    component: MainLayout,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Main = Template.bind({});
Main.args = {};
