import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RemSample } from './RemSample';

export default {
    title: 'Sample/rem vs px',
    component: RemSample,
    argTypes: {
        globalFontSize: { control: { type: 'number', min: 8, max: 30, step: 1 } },
        fontSize: { control: { type: 'number', min: 8, max: 30, step: 1 } },
    },
} as ComponentMeta<typeof RemSample>;

const Template: ComponentStory<typeof RemSample> = (args) => <RemSample {...args} />;

export const Default = Template.bind({});
Default.args = {
    // globalFontSize: 12,
};
