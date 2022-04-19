import React from 'react';

import { IntroButton } from './IntroButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Button/IntroButton',
    component: IntroButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <IntroButton {...args} />;
export const RA = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RA.args = {
    active: false,
    label: '책과 만나요',
};

export const RB = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RB.args = {
    active: false,
    label: '책과 생활해요',
};