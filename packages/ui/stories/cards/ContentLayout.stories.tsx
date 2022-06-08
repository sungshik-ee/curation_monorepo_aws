import React from 'react';
import { ContentLayout } from './ContentLayout';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/레이아웃',
    component: ContentLayout,
    argTypes: {
        onClick: { action: '카드 선택됨' },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof ContentLayout> = (args) => <ContentLayout {...args} />;

export const Content = Template.bind({});
Content.args = {};
