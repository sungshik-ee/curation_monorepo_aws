import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    const values = { username: 'tester', password: '1234' };
    const canvas = within(canvasElement);

    // validation error check
    await userEvent.click(canvas.getByTestId('submit'));

    await expect(args.onSubmit).toHaveBeenCalledTimes(0);

    await userEvent.type(canvas.getByTestId('username'), values.username, { delay: 100 });
    await userEvent.click(canvas.getByTestId('submit'));
    await expect(args.onSubmit).toHaveBeenCalledTimes(0);

    await userEvent.clear(canvas.getByTestId('username'));
    await userEvent.clear(canvas.getByTestId('password'));

    await userEvent.type(canvas.getByTestId('password'), values.password, { delay: 100 });
    await userEvent.click(canvas.getByTestId('submit'));
    await expect(args.onSubmit).toHaveBeenCalledTimes(0);

    await userEvent.clear(canvas.getByTestId('username'));
    await userEvent.clear(canvas.getByTestId('password'));

    await userEvent.type(canvas.getByTestId('username'), values.username, { delay: 100 });
    await userEvent.type(canvas.getByTestId('password'), values.password, { delay: 100 });
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledTimes(1));

    // await expect(args.onSubmit).toBe({ username: 'tester', password: '1234' });
};

export const Debounce = Template.bind({});
Debounce.args = {};
Debounce.play = async ({ args, canvasElement }) => {
    const values = { username: 'tester', password: '1234' };
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('username'), values.username, { delay: 100 });
    await userEvent.type(canvas.getByTestId('password'), values.password, { delay: 100 });
    await userEvent.dblClick(canvas.getByTestId('submit'));

    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledTimes(1));
};
