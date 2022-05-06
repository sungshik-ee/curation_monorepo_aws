import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { LoginForm } from './LoginForm';

export default {
    title: 'Forms/Login',
    component: LoginForm,
    argTypes: {
        onSubmit: { action: '로그인 시도됨' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
};
