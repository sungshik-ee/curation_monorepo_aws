import React from 'react';
import { AsideLayout } from './AsideLayout';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: '학생앱/전체보기/레이아웃',
    component: AsideLayout,
    argTypes: {
        onClick: { action: '선택됨' },
    },
    parameters: {
        // layout: 'centered',
    },
};

const Template: ComponentStory<typeof AsideLayout> = (args) => <AsideLayout {...args} />;

export const Aside = Template.bind({});
Aside.args = {};
